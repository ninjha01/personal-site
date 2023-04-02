import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import Cors from "cors";

// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});
const conversationSchema = z.array(messageSchema);
type Conversation = z.infer<typeof conversationSchema>;

const requestSchema = z.object({
  messages: conversationSchema,
  openaiApiKey: z.string(),
});
const responseSchema = z.object({
  id: z.string(),
  object: z.string(),
  created: z.number(),
  choices: z.array(
    z.object({
      index: z.number(),
      message: messageSchema,
      finish_reason: z.string(),
    })
  ),
  usage: z.object({
    prompt_tokens: z.number(),
    completion_tokens: z.number(),
    total_tokens: z.number(),
  }),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  let conversation: Conversation = [];

  if (req.method === "POST") {
    let parsedRequest = null;
    try {
      parsedRequest = requestSchema.parse(req.body);
      conversation = parsedRequest.messages;
    } catch (error: any) {
      res.status(400).json({ error: error?.message || "Invalid request" });
      return;
    }
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${parsedRequest.openaiApiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: conversation,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      res.status(500).json({ error });
      return;
    }
    const parsedResponseJson = responseSchema.parse(await response.json());
    conversation.push(parsedResponseJson.choices[0].message);
    res.status(200).json({ conversation });
  } else {
    res.status(404).json({ message: "Only POST requests are accepted" });
  }
}

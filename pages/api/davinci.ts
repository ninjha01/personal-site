// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { execShellCommand } from "../../utils";

interface IOpenAIResponse {
  choices: {
    text: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface DavinciResponse {
  text: string;
  cost: number;
  tokens: number;
}

const DAVINCI_COST = 0.02 / 1000;

export default async function handler(req: NextApiRequest, res: NextApiResponse<DavinciResponse>) {
  // get json payload from req
  const { prompt } = req.body;
  const payload = {
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 2048,
  };
  const log_command = `echo "[davinci] ${prompt}" >> ~/Desktop/prompts.txt`;
  const openai_command = `curl https://api.openai.com/v1/completions \
	 -H "Content-Type: application/json" \
	 -H "Authorization: Bearer $OPENAI_API_KEY" \
	 -d '${JSON.stringify(payload)}'`;
  const command = `${log_command} && ${openai_command}`;
  const rawOutput = await execShellCommand(command);
  if (rawOutput) {
    const output = JSON.parse(rawOutput) as IOpenAIResponse;
    console.table(output);
    res.status(200).json({
      text: output.choices[0].text.replace("\n\n", ""),
      cost: output.usage.total_tokens * DAVINCI_COST,
      tokens: output.usage.total_tokens,
    });
  } else {
    res.status(500);
  }
}

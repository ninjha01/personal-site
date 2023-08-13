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
const responseSchema = z.object({
  vercel: z.object({
    status: z.union([z.literal("error"), z.literal("success"), z.literal("unknown")]),
    displayName: z.string(),
  }),
  toggl: z.object({
    hoursPerDay: z.number(),
    hoursPerWeek: z.number(),
    hoursPerMonth: z.number(),
  }),
  theme: z.object({
    displayName: z.string(),
    color: z.string().regex(/^#[0-9A-F]{6}$/i),
  }),
});

// get from fetchUrl: `https://api.github.com/users/ninjha01`,
// https://api.vercel.com/v6/deployments?teamId=[teamID]
// https://api.vercel.com/v6/deployments
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  if (req.method != "GET") {
    res.status(404).json({ message: "Only GET requests are accepted" });
    return;
  } else {
    const response = responseSchema.parse({ baz: "qux" });
    res.status(200).json({ response });
    return;
  }
}

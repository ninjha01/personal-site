// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { kebabCase } from "cypress/types/lodash";
import type { NextApiRequest, NextApiResponse } from "next";
import { addslashes, execShellCommand } from "../../utils";

interface IStableDiffusionResponse {
  image_src: string;
  error?: string;
}

export interface StableDiffusionErrorResponse {
  error: string;
}

export interface StableDiffusionSuccessResponse {
  img_src: string;
}

export type StableDiffusionResponse = StableDiffusionErrorResponse | StableDiffusionSuccessResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<StableDiffusionResponse | { error: string }>
) {
  const { prompt } = req.body;
  const command = `source ~/.zshrc && asksd ${addslashes(prompt)}`;
  try {
    const rawOutput = await execShellCommand(command);

    if (rawOutput) {
      if (rawOutput.includes("/bin/sh")) {
        return res.status(500).json({ error: rawOutput });
      }
      const lines = rawOutput.split("\n");
      lines.pop(); // get rid of trailing last newline
      const raw_img_src = lines.pop();
      const img_src = raw_img_src?.replace("/Users/nishantjha/Desktop/personal-site/public", "");
      console.table({ raw_img_src });
      if (img_src) {
        return res.status(200).json({
          img_src,
        });
      } else {
        return res.status(500).json({ error: `Failed to parse output ${rawOutput}` });
      }
    } else {
      return res.status(500).json({ error: "No output from command" });
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}

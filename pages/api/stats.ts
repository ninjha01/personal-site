import type { NextApiRequest, NextApiResponse } from "next";
import wretch from "wretch";
import { z } from "zod";
import Cors from "cors";

const cors = Cors({
  methods: ["GET"],
});

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

async function getVercelData() {
  const rawDeployment = await wretch("https://api.vercel.com/v6/deployments")
    .headers({ Authorization: `Bearer ${process.env.VERCEL_TOKEN}` })
    .get()
    .json();
  const parsedDeployments = z.object({ deployments: z.array(DeploymentSchema) }).parse(rawDeployment).deployments;
  const lastDeployment = parsedDeployments[0];
  const vercelData = VercelSchema.parse({
    status: lastDeployment.state,
    displayName: `${lastDeployment.creator.username}/${lastDeployment.meta.githubRepo}`,
  });
  return vercelData;
}
const DeploymentSchema = z.object({
  uid: z.string().min(1).max(256),
  name: z.string().min(1).max(256),
  url: z.string(),
  created: z.number(),
  state: z.enum(["ERROR", "QUEUED", "BUILDING", "READY"]),
  creator: z.object({
    uid: z.string().min(1).max(256),
    email: z.string().email(),
    username: z.string().min(1).max(256),
  }),
  meta: z.object({
    githubCommitMessage: z.string(),
    githubCommitRepo: z.string(),
    githubCommitSha: z.string(),
    githubOrg: z.string(),
    githubRepo: z.string(),
  }),
  target: z.enum(["production", "preview"]).nullable(),
});

const VercelSchema = z.object({
  status: z.enum(["ERROR", "QUEUED", "BUILDING", "READY"]),
  displayName: z.string(),
});

const ThemeSchema = z.object({
  displayName: z.string(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i),
});
const responseSchema = z.object({
  vercel: VercelSchema,
  theme: ThemeSchema,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  if (req.method !== "GET") {
    res.status(404).json({ message: "Only GET requests are accepted" });
    return;
  }

  const theme = ThemeSchema.parse({
    displayName: "Dark",
    color: "#000000",
  });

  let vercelData = VercelSchema.parse({
    status: "ERROR",
    displayName: "Failed to fetch data from Vercel.",
  });
  try {
    vercelData = VercelSchema.parse(await getVercelData());
  } catch (error) {
    console.error(error);
  }

  const payload = responseSchema.parse({
    vercel: vercelData,
    theme,
  });

  res.status(200).json(payload);
}

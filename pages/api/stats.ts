import type { NextApiRequest, NextApiResponse } from "next";
import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";
import { z } from "zod";
import Cors from "cors";

const githubUsername = "ninjha01";

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

async function getGithubCommitData() {
  const GithubPushEventSchema = z.array(
    z.object({
      id: z.string(),
      type: z.union([z.literal("PushEvent"), z.string()]),
      created_at: z.string(),
    })
  );

  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 6);

  const since = oneWeekAgo.toISOString();
  const until = today.toISOString();

  const rawData = await wretch(`https://api.github.com/users/${githubUsername}/events/public`)
    .addon(QueryStringAddon)
    .headers({ Authorization: `token ${process.env.GITHUB_TOKEN}` })
    .query({ since, until })
    .get()
    .json();

  const data = GithubPushEventSchema.parse(rawData);
  const days = Array(7).fill(0);
  oneWeekAgo.setDate(today.getDate() - 6);

  data.forEach(event => {
    if (event.type === "PushEvent") {
      const eventDate = new Date(event.created_at);
      if (eventDate >= oneWeekAgo && eventDate <= today) {
        const diff = Math.floor((today.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24));
        days[6 - diff]++;
      }
    }
  });

  const commitChart = days
    .map(d => {
      if (d === 0) return ".";
      if (d < 5) return "-";
      return "#";
    })
    .join("");

  return { commitChart };
}

const VercelSchema = z.object({
  status: z.enum(["ERROR", "QUEUED", "BUILDING", "READY"]),
  displayName: z.string(),
});

const GithubSchema = z.object({
  commitChart: z.string().regex(/^[.#-]{7}$/),
});

const ResponseSchema = z.object({
  vercel: VercelSchema,
  github: GithubSchema,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  if (req.method !== "GET") {
    res.status(404).json({ message: "Only GET requests are accepted" });
    return;
  }

  let vercelData = VercelSchema.parse({
    status: "ERROR",
    displayName: "Failed to fetch data from Vercel.",
  });
  try {
    vercelData = VercelSchema.parse(await getVercelData());
  } catch (error) {
    console.error("Vercel error");
    console.error(error);
  }

  let githubData = GithubSchema.parse({
    commitChart: ".......",
  });
  try {
    githubData = GithubSchema.parse(await getGithubCommitData());
  } catch (error) {
    console.error("Github error");
    console.error(error);
  }

  const payload = ResponseSchema.parse({
    vercel: vercelData,
    github: githubData,
  });
  res.status(200).json(payload);
}

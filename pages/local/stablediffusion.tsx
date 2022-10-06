import Head from "next/head";
import { useRef, useState } from "react";
import { Shell } from "../../components/Shell";

import { PromptEditor } from "../../components/PromptEditor";
import { StableDiffusionResponse } from "../api/stablediffusion";
import { DataDisplay } from "../../components/StableDiffusionDataDisplay";

export default function DaVinci() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<StableDiffusionResponse | null>(null);

  const submitPromptOnClick = async () => {
    const promptText = textAreaRef.current?.value || "";
    setLoading(true);
    setData(null);
    console.log("submitting prompt", promptText);
    try {
      const response = await fetch("/api/stablediffusion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptText }),
      });
      const _data = await response.json();
      setData(_data);
    } catch (e) {
      alert(`Something went wrong: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>StableDiffusion | Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/mockups"} />
      </Head>
      <Shell>
        <div className="mx-auto mb-8 flex max-w-7xl flex-row items-center px-4 sm:px-6 md:px-8">
          <h1 className="flex-2 text-4xl font-semibold text-zinc-200">StableDiffusion Text Generator</h1>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-8 lg:-mx-24">
          <PromptEditor textAreaRef={textAreaRef} submitPromptOnClick={submitPromptOnClick} loading={loading} />
          <DataDisplay data={data} loading={loading} />
        </div>
      </Shell>
    </>
  );
}
import { classNames } from "../utils";
import Image from "next/image";
import { StableDiffusionResponse, StableDiffusionSuccessResponse } from "../pages/api/stablediffusion";

export const DataDisplay = ({ data, loading }: { data: StableDiffusionResponse | null; loading: boolean }) => {
  const containerClass = "lg:mx-auto rounded-xl border-4 border-zinc-600 bg-zinc-900 p-4 text-base";

  if (!data) {
    return (
      <div className={classNames(containerClass, loading && "animate-pulse")}>
        <h1 className="flex-2 mb-2 text-3xl font-semibold text-zinc-600 opacity-50">Response: </h1>
        <h2
          className={"w-100 mb-4 h-5 max-w-7xl rounded-xl border border-zinc-600 bg-zinc-700 opacity-50 lg:w-[420px]"}
        ></h2>
        <h3 className={"mb-4 h-5 w-80 rounded-xl border border-zinc-600 bg-zinc-700 opacity-50"}></h3>
        <div className={"flex w-full flex-col gap-2 space-y-1"}>
          <div className={"flex flex w-full items-center"}>
            <div className={"mb-4 h-5 w-80 rounded-xl border border-zinc-600 bg-zinc-700 opacity-50"}></div>
            <div className={"ml-4  mb-4 h-5 w-12 rounded-xl border border-zinc-600 bg-zinc-700 opacity-50"}></div>
          </div>
          <div className={"mb-2 mb-4 h-5 w-36 rounded-xl border border-zinc-600 bg-zinc-700 opacity-50"}></div>
          <div className={"mb-4 h-44 w-full rounded-xl border border-zinc-600 bg-zinc-700 opacity-50"}></div>
        </div>
      </div>
    );
  }
  let errorText: string | null = null;
  if (data === null) {
    errorText = "No data";
  } else if ("error" in data) {
    errorText = data.error;
  }
  if (errorText) {
    return (
      <div className={classNames(containerClass, "border-dashed")}>
        <h1 className="flex-2 mb-2 text-3xl font-semibold text-zinc-600 opacity-50">Response: </h1>
        <h2 className="text-red-500">{errorText}</h2>
      </div>
    );
  }
  const { img_src } = data as StableDiffusionSuccessResponse;
  console.log({ img_src });
  return (
    <div className={classNames(containerClass, "flex items-center justify-center")}>
      <Image alt="stable diffusion image" src={img_src} width={512} height={512} />
    </div>
  );
};

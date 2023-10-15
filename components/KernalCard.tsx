export interface KernelData {
  os: string;
  RAM: number;
  cores: number;
  interpreter: string;
}
export const KernelCard = (props: { kernelData: KernelData }) => {
  const { kernelData } = props;
  const divider = (
    <div className="mx-4 block" aria-hidden="true">
      <div>
        <div className="border-t-2 border-gray-300" />
      </div>
    </div>
  );

  return (
    <section className="w-full">
      <div className="overflow-hidden rounded-lg bg-zinc-700 shadow-2xl">
        <div className="bg-zinc-700 px-4 py-4  sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-blue-100">
            Kernel Data
          </h3>
        </div>
        {divider}
        <div className="mt-6 flex w-full flex-col gap-2 text-zinc-300">
          <div className="flex flex-row px-4 sm:px-6">
            <strong className="mr-4">Status: </strong>
            <p className="ml-auto animate-pulse text-ellipsis text-right font-mono font-bold text-yellow-500">
              Running Cell #3
            </p>
          </div>
          <div className="flex flex-row px-4 sm:px-6">
            <strong className="mr-auto text-ellipsis">Kernel: </strong>
            <p className="ml-auto text-right font-mono ">
              {kernelData.interpreter}
            </p>
          </div>
          <div className="flex flex-row px-4 sm:px-6">
            <strong>OS: </strong>
            <p className="ml-auto font-mono">{kernelData.os}</p>
          </div>
          <div className="flex flex-row px-4 sm:px-6">
            <strong>RAM: </strong>
            <p className="ml-auto font-mono">{kernelData.RAM}</p>
          </div>
          <div className="flex flex-row px-4 sm:px-6">
            <strong>Cores: </strong>
            <p className="ml-auto font-mono">{kernelData.cores}</p>
          </div>
          <div className="flex flex-col gap-2 px-4 py-2 sm:px-6">
            <strong>RAM Pressure: </strong>
            <div className="relative ">
              <span className="absolute z-10 h-2   w-1/3 animate-pulse rounded-full bg-green-500" />
              <span className="absolute h-2 w-full rounded-full  bg-gray-300" />
            </div>
          </div>
          <div className="mb-2 flex flex-col gap-2 px-4 pb-5 pt-2 sm:px-6">
            <strong>% CPU: </strong>
            <div className="relative ">
              <span className="absolute z-10 h-2 w-2/3 animate-pulse rounded-full bg-red-500" />
              <span className="absolute h-2 w-full rounded-full  bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getKernelData = (): KernelData => {
  return {
    os: "Ubuntu",
    RAM: 16,
    cores: 32,
    interpreter: "IPython3",
  };
};

export interface KernelData {
  os: string;
  RAM: number;
  cores: number;
  interpreter: string;
}
export const KernelCard = (props: { kernelData: KernelData }) => {
  const { kernelData } = props;
  const divider = (
    <div className="block mx-4" aria-hidden="true">
      <div>
        <div className="border-t-2 border-gray-300" />
      </div>
    </div>
  );

  return (
    <section className="w-full">
      <div className="bg-white shadow-2xl overflow-hidden sm:rounded-lg">
        <div className="bg-white px-4 py-4  sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Kernel Data</h3>
        </div>
        {divider}
        <div className="flex flex-col w-full gap-2 mt-6">
          <div className="px-4 sm:px-6 flex flex-row">
            <strong className="mr-4">Status: </strong>
            <p className="ml-auto font-mono font-bold text-yellow-500 animate-pulse text-ellipsis text-right">
              Running Cell #3
            </p>
          </div>
          <div className="px-4 sm:px-6 flex flex-row">
            <strong className="mr-auto text-ellipsis">Kernel: </strong>
            <p className="ml-auto font-mono text-right ">{kernelData.interpreter}</p>
          </div>
          <div className="px-4 sm:px-6 flex flex-row">
            <strong>OS: </strong>
            <p className="ml-auto font-mono">{kernelData.os}</p>
          </div>
          <div className="px-4 sm:px-6 flex flex-row">
            <strong>RAM: </strong>
            <p className="ml-auto font-mono">{kernelData.RAM}</p>
          </div>
          <div className="px-4 sm:px-6 flex flex-row">
            <strong>Cores: </strong>
            <p className="ml-auto font-mono">{kernelData.cores}</p>
          </div>
          <div className="px-4 py-2 sm:px-6 flex flex-col gap-2">
            <strong>RAM Pressure: </strong>
            <div className="relative ">
              <span className="absolute h-2 w-1/3   bg-green-500 rounded-full z-10 animate-pulse" />
              <span className="absolute h-2 w-full bg-gray-300  rounded-full" />
            </div>
          </div>
          <div className="px-4 pb-5 pt-2 sm:px-6 mb-2 flex flex-col gap-2">
            <strong>% CPU: </strong>
            <div className="relative ">
              <span className="absolute h-2 w-2/3 bg-red-500 rounded-full z-10 animate-pulse" />
              <span className="absolute h-2 w-full bg-gray-300  rounded-full" />
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

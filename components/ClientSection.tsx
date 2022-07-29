import Image from "next/image";
import { ClientType } from "../commonTypes";

export const ClientSection = (props: { clients: ClientType[] }) => {
  const { clients } = props;
  return (
    <section className="mb-16">
      <h1
        id="clients"
        className="mb-8 border-t pt-8 text-4xl text-2xl font-bold leading-none tracking-tighter text-neutral-600"
      >
        Clients
      </h1>

      <div className="auto-rows-1 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {clients.map(client => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
    </section>
  );
};
const ClientCard = (props: { client: ClientType }) => {
  const {
    client: { name, url, logo, subtitle },
  } = props;

  /* if we description is null, we assume it's a current engagement */
  let description = props.client.description ? (
    <p className="mx-auto mb-auto whitespace-normal p-4 text-base font-medium leading-relaxed text-gray-700 ">
      {props.client.description}
    </p>
  ) : (
    <h1 className="mx-auto my-auto mb-auto animate-pulse whitespace-normal text-center text-xl font-semibold leading-relaxed tracking-wider text-blue-900">
      Current Engagement
    </h1>
  );

  return (
    <div className="flex flex-col rounded-xl bg-white p-6 text-left shadow-md duration-200 ease-in-out hover:shadow-xl hover:shadow-blue-900 ">
      {description}
      <a className="mt-8 mb-2 flex flex-row items-center gap-3" href={url}>
        <div className="outline-rounded relative mt-3 inline-block h-16  w-16 overflow-hidden rounded-full object-cover p-1 align-baseline  outline-dashed outline-offset-4 outline-blue-900 ">
          <Image src={logo} alt="Logo" layout="fill" objectFit="cover" />
        </div>
        <div className="space-between flex flex-col justify-center gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-900">{name}</p>
          <p className="track-tighter text-xs text-gray-500">{subtitle}</p>
        </div>
      </a>
    </div>
  );
};

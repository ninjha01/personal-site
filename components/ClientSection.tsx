import Image from "next/image";
import { ClientType } from "../commonTypes";
import { classNames } from "../utils";
import { ImageBackground } from "./ImageBackground";

export const ClientSection = (props: { clients: ClientType[] }) => {
  const { clients } = props;
  let rotations = ["sm:rotate-2", "sm:-rotate-2", "sm:rotate-2", "sm:rotate-2", "sm:-rotate-2"];
  return (
    <section className="mb-16">
      <h1
        id="clients"
        className="mb-8 border-t border-blue-100 pt-8 text-4xl text-2xl font-bold leading-none tracking-tighter text-blue-100"
      >
        Clients
      </h1>

      <div className="">
        <div className=" grid justify-center gap-5 gap-8 py-4 sm:gap-12 sm:px-16 md:px-0 lg:-mx-24 lg:flex">
          {clients.map((client, idx) => (
            <ClientCard key={client.name} client={client} rotation={rotations[idx % rotations.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};
const ClientCard = (props: { client: ClientType; rotation: string }) => {
  const {
    client: { name, url, logo, subtitle, bg_img },
    rotation,
  } = props;

  /* if we description is null, we assume it's a current engagement */
  let description = (
    <span className="mx-auto mb-auto whitespace-normal text-base font-medium leading-relaxed text-blue-100 ">
      {props.client.description}
    </span>
  );

  return (
    <div
      className={classNames(
        "relative flex max-w-xl flex-1 flex-col justify-between rounded-xl p-6 text-left shadow-md duration-200 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-900",
        rotation
      )}
    >
      <ImageBackground img={bg_img} />
      <p className="z-10">{description}</p>
      <div className="z-10 mt-8 mb-2 flex flex-row items-center gap-3">
        <Image
          src={logo}
          alt="Logo"
          className="md:outline-rounded relative mt-3 inline-block h-16 w-16 overflow-hidden rounded-full object-cover object-cover p-1  align-baseline md:outline-dashed md:outline-offset-4 md:outline-blue-200"
        />
        <div className="space-between flex flex-col justify-center gap-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">{name}</p>
          <p className="track-tighter text-xs text-blue-200">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

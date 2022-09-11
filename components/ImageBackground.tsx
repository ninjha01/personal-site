import Image from "next/image";
import { classNames } from "../utils";

export const ImageBackground = (props: { img: any; className?: string }) => {
  const { img, className } = props;
  return (
    <div className={classNames("absolute inset-0", className)}>
      <div className={classNames("relative h-full w-full object-cover")}>
        <Image key={img.src} layout="fill" objectFit="cover" className={classNames("rounded-xl")} src={img} alt="" />
      </div>
      <div className="absolute inset-0 rounded-xl bg-zinc-800 opacity-60 " />
    </div>
  );
};

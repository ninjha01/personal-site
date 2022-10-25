import Image from "next/image";
import { classNames } from "../utils";

export const ImageBackground = (props: { img: any; className?: string }) => {
  const { img, className } = props;
  return (
    <div className={classNames("absolute inset-0", className)}>
      <Image key={img.src} className={classNames("relative h-full w-full rounded-xl object-cover")} src={img} alt="" />

      <div className="absolute inset-0 rounded-xl bg-zinc-800 opacity-60 " />
    </div>
  );
};

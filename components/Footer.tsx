import Image from "next/image";
import profile from "../public/assets/images/profile.jpg";

export const Footer = () => (
  <div className="flex flex-shrink-0 bg-gray-50 p-4 px-4">
    <div className="flex items-center">
      <div>
        <Image className="inline-block h-9 w-9 rounded-full" src={profile} alt="" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-blue-900">Nishant Jha</p>
      </div>
    </div>
  </div>
);

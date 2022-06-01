import React from "react";

export const Footer = () => (
  <div className="flex flex-shrink-0 p-4 px-4 bg-gray-50">
    <div className="flex items-center">
      <div>
        <img className="inline-block rounded-full h-9 w-9" src={require("../assets/images/profile.jpg")} alt="" />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-blue-900">Nishant Jha</p>
      </div>
    </div>
  </div>
);

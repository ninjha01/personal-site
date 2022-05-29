import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Steps, StepType } from "./Step";

export const Blast = () => {
  const steps: StepType[] = [
    {
      name: "Enter Sequence",
      status: "complete" as const,
      href: "#",
      id: "01",
    },
    { name: "Blast!", status: "current" as const, href: "#", id: "02" },
    { name: "Analyze", status: "todo" as const, href: "#", id: "03" },
  ];

  return (
    <>
      <Sidebar>
        <Steps steps={steps} />
      </Sidebar>
    </>
  );
};

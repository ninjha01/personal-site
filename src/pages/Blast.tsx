import React from "react";
import { EssaySection } from "../components/EssaySection";
import { HeroSection } from "../components/HeroSection";
import { Sidebar } from "../components/Sidebar";
import { config } from "../config";

export const Blast = () => {
  return (
    <>
      <Sidebar>
        <HeroSection />
        <EssaySection essays={config.essays} />
      </Sidebar>
    </>
  );
};

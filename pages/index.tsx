import Head from "next/head";
import { ClientSection } from "../components/ClientSection";
import { EssaySection } from "../components/EssaySection";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { Shell } from "../components/Shell";
import { config } from "../config";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/"} />
      </Head>
      <Shell>
        <HeroSection />
        <ClientSection clients={config.clients} />
        <EssaySection essays={config.essays} />
        <ProjectSection projects={config.projects} />
      </Shell>
    </>
  );
};

export default Home;

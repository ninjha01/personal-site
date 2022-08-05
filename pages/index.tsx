import Head from "next/head";
import { ClientSection } from "../components/ClientSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { Sidebar } from "../components/Sidebar";
import { config } from "../config";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/"} />
      </Head>
      <Sidebar>
        <HeroSection />
        <ClientSection clients={config.clients} />
        <ProjectSection projects={config.projects} />
        {/* <EssaySection essays={config.essays} /> */}
      </Sidebar>
    </>
  );
};

export default Home;

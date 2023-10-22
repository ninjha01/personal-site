import Head from "next/head";
import { WorkSection } from "../components/WorkSection";
import { EssaySection } from "../components/EssaySection";
import { HeroSection } from "../components/HeroSection";

import { Shell } from "../components/Shell";
import { config } from "../config";
import { NewsletterSignup } from "../components/NewsletterSignup";

export const Home = () => {
  return (
    <>
      <Head>
        <title>Nishant Jha</title>
        <link rel="canonical" href={"https://nishantjha.org/"} />
      </Head>
      <Shell>
        <HeroSection />
        <WorkSection clients={config.clients} />
        <section className="grid grid-cols-1 gap-8 border-t border-blue-100 pt-8 lg:grid-cols-2">
          <EssaySection essays={config.essays} />
          <NewsletterSignup className="" pageName={"Home"} />
        </section>
      </Shell>
    </>
  );
};

export default Home;

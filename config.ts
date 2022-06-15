import broad_logo from "./public/assets/images/broad_logo.png";
import calico_logo from "./public/assets/images/calico_logo.png";
import control_problem_img from "./public/assets/images/control_problem_img.jpg";
import cra_img from "./public/assets/images/cra_img.jpg";
import feld1viz_logo from "./public/assets/images/feld1viz_logo.png";
import lattice_logo from "./public/assets/images/lattice_logo.png";
import nature_genetics_logo from "./public/assets/images/nature_genetics_logo.png";
import seqviz_logo from "./public/assets/images/seqviz_logo.png";
import strange_loops_img from "./public/assets/images/strange_loops_img.jpg";

import { ClientType, EssayType, PersonalType, ProjectType } from "./commonTypes";

export const config: {
  url: string;
  clients: ClientType[];
  personal: PersonalType;
  projects: ProjectType[];
  essays: EssayType[];
} = {
  url: "nishantjha.org",
  personal: {
    firstname: "Nishant",
    lastname: "Jha",
    headline: "Life Science Software Engineer",
    // eslint-disable-next-line no-useless-escape
    bio: `**I know what it’s like to wake up at 4am to dose mice** - and how frustrating it can be when you don’t have the right tools on hand.

\
&nbsp;
\
&nbsp;

My mission is to accelerate life science research by building those tools with you. Get in touch!`,
    linkedin: "https://www.linkedin.com/in/ninjha01",
    github: "https://github.com/ninjha01/",
    email: "me@nishantjha.org",
  },
  clients: [
    {
      name: "Calico Labs",
      url: "https://www.calicolabs.com/",
      description: null,
      subtitle: "An Alphabet Company",
      logo: calico_logo,
    },
    {
      name: "Broad Institute",
      url: "https://cancerdatascience.org/",
      description: "Accelerated cancer research by building data analysis tools for the DepMap portal.",
      subtitle: "of MIT and Harvard",
      logo: broad_logo,
    },
    {
      name: "Lattice Automation",
      url: "https://latticeautomation.com/",
      description:
        "Built performant, well designed software tools for scientists at the bench in collaboration with companies like Ginkgo Bioworks.",
      subtitle: "Synthetic Biology Software Consultancy",
      logo: lattice_logo,
    },
    // {
    //   name: "Qwarke",
    //   url: "https://qwarke.com/ComingSoon.html",
    //   description: "Hello World",
    //   logo:qwarke_logo,
    // },
  ],
  projects: [
    {
      title: "SeqViz - DNA Sequence Viewer",
      url: "https://github.com/Lattice-Automation/seqviz/",
      img: seqviz_logo,
      description:
        "SeqViz is the customizable DNA sequence viewer. This open source Javascript library is popular in industry and academia.",
    },
    {
      title: "Pediatric Cancer Visualization",
      url: "https://www.nature.com/articles/s41588-021-00819-w",
      img: nature_genetics_logo,
      description:
        "Created a Pediatric Cancer Cell Line visualization to showcase potential targets for Pediatric Precision Medicine.",
    },
    {
      title: "Fel d 1 Viz",
      url: "https://www.feld1viz.com",
      img: feld1viz_logo,
      description: "A visualization of research aimed at creating a hypoallergenic cat.",
    },
  ],
  essays: [
    {
      title: "Strange Loops",
      id: "strange_loops",
      img: strange_loops_img,
      description: "What if the code that your computer runs on could be modified by the software itself?",
    },
    {
      title: "The Control Problem",
      id: "control_problem",
      img: control_problem_img,
      description:
        "The student has become the teacher or perhaps more accurately, the calculator has become the mathematician.",
    },
    {
      title: "Crazy Rich Asians Book Review",
      id: "cra",
      img: cra_img,
      description: "Is Crazy Rich Asians the Instagram of Books?",
    },
  ],
};

import {
	ClientType,
	EssayType,
	PersonalType,
	ProjectType
} from "./commonTypes";

export const config: {
  clients: ClientType[];
  personal: PersonalType;
  projects: ProjectType[];
  essays: EssayType[];
} = {
  personal: {
    firstname: "Nishant",
    lastname: "Jha",
    headline: "Life Science Software Engineer",
    bio: "I know what it’s like to wake up at 4am to dose mice - and how frustrating it can be when you don’t have the right software on hand.",
    linkedin: "https://www.linkedin.com/in/ninjha01",
    email: "me@nishantjha.org",
  },
  clients: [
    {
      name: "Calico Labs",
      url: "https://cancerdatascience.org/",
      description: "Hello World",
      logo: require("./assets/images/calico_logo.png"),
    },
    {
      name: "Broad Institute of MIT and Harvard",
      url: "https://cancerdatascience.org/",
      description:
        "Built data analysis tools for the DepMap portal by writing reusable React components on top of a Flask and Postgres stack.",
      logo: require("./assets/images/broad_logo.png"),
    },
    {
      name: "Lattice Automation",
      url: "https://cancerdatascience.org/",
      description:
        "Built webapps for synthetic biology companies like Ginkgo Bioworks. Handled requirements gathering, architecture formulation, development, testing, and deployment as well as mentoring junior software engineers.",
      logo: require("./assets/images/lattice_logo.png"),
    },
    {
      name: "Qwarke",
      url: "https://qwarke.com/ComingSoon.html",
      description: "Hello World",
      logo: require("./assets/images/qwarke_logo.png"),
    },
  ],
  projects: [
    {
      title: "SeqViz - DNA Sequence Viewer  [2022]",
      url: "https://github.com/Lattice-Automation/seqviz/",
      img: "https://camo.githubusercontent.com/0d4c4b5edcdb38bb3d028b24f06159d4a850991c4044de430157f845c73c325b/68747470733a2f2f696d6775722e636f6d2f726b4a316972462e706e67",
      description:
        "I maintain SeqViz, the customizable DNA sequence viewer. This open source Javascript library is popular in industry and academia including Ginkgo Bioworks and Boston University.",
    },
    {
      title: "Nature Genetics Pediatric Cancer Viz [2021]",
      url: "https://www.nature.com/articles/s41588-021-00819-w",
      img: "",
      description:
        "Created a Pediatric Cancer Cell Line visualization to showcase potential targets for Pediatric Precision Medicine.",
    },
    {
      title: "Fel d 1 Viz [2021]",
      url: "https://www.feld1viz.com",
      img: "",
      description:
        "This visualization showcases data produced in research aimed at creating a hypoallergenic cat. The major cat allergen Fel d 1 was analyzed in Domestic and Exotic cats and were found to be good candidates for CRISPR deletion. Published in the CRISPR Journal.",
    },
    {
      title: "Vape Survey [2021]",
      url: "https://www.vapesurvey.org/",
      img: "",
      description:
        "This webapp was developed for the Johns Hopkins Sociology Dept as part of an investigation into the impact network effects on vaping. It securely and confidentially collects survey responses, anonymously distributes randomized rewards for completing the survey, and displays the results in a network graph visualization",
    },
  ],
  essays: [
    {
      title: "Strange Loops [2017]",
      id: "strange_loops",
      img: "",
      description:
        "What if the code that your computer runs on could be modified by the software itself?",
    },
    {
      title: "The Control Problem [2017]",
      id: "control_problem",
      img: "",
      description:
        "The student has become the teacher or perhaps more accurately, the calculator has become the mathematician.",
    },
    {
      title: "Crazy Rich Asians | Book Review [2017]",
      id: "cra",
      img: "",
      description: "Is Crazy Rich Asians the Instagram of Books?",
    },
  ],
};

import { EssayType, PersonalType, ProjectType } from "./commonTypes";

export const config: {
  Personal: PersonalType;
  Projects: ProjectType[];
  Essays: EssayType[];
} = {
  Personal: {
    firstname: "Nishant",
    lastname: "Jha",
    headline:
      'Software Engineer at Lattice Automation (prev <a href="https://cancerdatascience.org/">Broad Institute of MIT and Harvard</a>)',
    bio: "I am a software engineer who enjoys working at the intersection of biological research and computer science.",
    linkedin: "https://www.linkedin.com/in/ninjha01",
    email: "me@nishantjha.org",
  },
  Projects: [
    {
      title: "SeqViz - DNA Sequence Viewer  [2022]",
      url: "https://github.com/Lattice-Automation/seqviz/",
      icon: "fa-github",
      blurb:
        'I maintain SeqViz, the customizable DNA sequence viewer. This open source Javascript library is popular in industry and academia (including <a href="https://www.ginkgobioworks.com/">Ginkgo Bioworks</a> and <a href="https://www.cidarlab.org/">Boston University</a>).',
    },
    {
      title: "Nature Genetics Pediatric Cancer Viz [2021]",
      url: "https://www.nature.com/articles/s41588-021-00819-w",
      icon: "fa-book",
      blurb:
        'Created a Pediatric Cancer Cell Line <a href="https://depmap.org/peddep/">visualization</a> to showcase potential targets for Pediatric Precision Medicine.',
    },
    {
      title: "Fel d 1 Viz [2021]",
      url: "https://www.feld1viz.com",
      icon: "fa-flask",
      blurb:
        'This visualization showcases data produced in research aimed at creating a hypoallergenic cat. The major cat allergen Fel d 1 was analyzed in Domestic and Exotic cats and were found to be good candidates for CRISPR deletion. Published in <a href="https://www.liebertpub.com/doi/10.1089/crispr.2021.0101">the CRISPR Journal.</a>',
    },
    {
      title: "Vape Survey [2021]",
      url: "https://www.vapesurvey.org/",
      icon: "fa-bar-chart",
      blurb:
        'This webapp was developed for the <a href="https://soc.jhu.edu/">Johns Hopkins Sociology Dept</a> as part of an investigation into the impact network effects on vaping. It securely and confidentially collects survey responses, anonymously distributes randomized rewards for completing the survey, and displays the results in a network graph <a href="http://www.vapesurvey.org/viz">visualization</a>.',
    },
  ],
  Essays: [
    {
      title: "Strange Loops [2017]",
      filename: "strange_loops",
      blurb:
        "What if the code that your computer runs on could be modified by the software itself?",
    },
    {
      title: "The Control Problem [2017]",
      filename: "control_problem",
      blurb:
        "The student has become the teacher or perhaps more accurately, the calculator has become the mathematician.",
    },
    {
      title: "Crazy Rich Asians | Book Review [2017]",
      filename: "cra",
      blurb: "Is Crazy Rich Asians the Instagram of Books?",
    },
  ],
};

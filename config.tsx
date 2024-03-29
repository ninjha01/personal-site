import profile from "./public/assets/images/profile.jpg";
import world_eater from "./public/assets/images/world_eater.jpeg";
import squeeze from "./public/assets/images/squeeze.png";
import universe from "./public/assets/images/universe.jpeg";
import broad_logo from "./public/assets/images/broad_logo.png";
import calico_logo from "./public/assets/images/calico_logo.webp";
import cancer_img from "./public/assets/images/cancer.jpg";
import labvid_img from "./public/assets/images/labvid.jpg";
import czi_logo from "./public/assets/images/czi_logo.png";

import pipette_img from "./public/assets/images/pipette.jpg";

import {
  ClientType,
  EssayType,
  LocalToolsType,
  MockupType,
  NavLink,
  PersonalType,
  UsesItem,
} from "./commonTypes";

export const config: {
  url: string;
  links: NavLink[];
  clients: ClientType[];
  personal: PersonalType;
  mockups: MockupType[];
  localTools: LocalToolsType[];
  uses: {
    workstation: UsesItem[];
    development: UsesItem[];
    productivity: UsesItem[];
  };
  essays: EssayType[];
} = {
  url: "nishantjha.org",
  personal: {
    firstname: "Nishant",
    lastname: "Jha",
    profile: profile,
    headline: "Life Science Software Engineer",
    // eslint-disable-next-line no-useless-escape
    bio: `**I know what it’s like to wake up at 4am to dose mice** - and how frustrating it can be when you don’t have the right tools on hand. 

\
&nbsp;
\
&nbsp;

I'm a software designer based in Pasadena, CA. My work serves research scientists at the bench and the keyboard.`,
    github: "https://github.com/ninjha01/",
    email: "contact@nishantjha.org",
  },
  clients: [
    {
      name: "Calico Labs",
      url: "https://www.calicolabs.com/",
      description:
        "Set best practices for frontend development. Reduced toil and increased efficiency in the vivarium through a video monitoring system for lab mice.",
      subtitle: "An Alphabet Company",
      logo: calico_logo,
      bg_img: labvid_img,
    },
    {
      name: "Broad Institute",
      url: "https://cancerdatascience.org/",
      description:
        "Accelerated cancer research by building data analysis tools for the DepMap portal. Built a visualization that was published in Nature Genetics.",
      subtitle: "of MIT and Harvard",
      logo: broad_logo,
      bg_img: cancer_img,
    },
    {
      name: "Chan Zuckerberg Initiative",
      url: "https://czid.org/",
      description:
        "Built performant, well designed software tools to detect and track emerging infectious diseases worldwide.",
      subtitle: "",
      logo: czi_logo,
      bg_img: pipette_img,
    },
  ],
  mockups: [
    {
      title: "Blast Service",
      url: "/mockups/blast",
      description:
        "Many companies and institutions need a blast tool that is **private**, **fast**, and **easy to use** across all screen sizes.",
    },
    {
      title: "Data Notebook",
      url: "/mockups/notebook",
      description:
        "A data notebook that surfaces system information and tracks execution in an intuitive way.",
    },
  ],
  links: [
    { label: "Home", href: "/" },
    { label: "Writing", href: "/essays" },
    { label: "Mockups", href: "/mockups" },
    { label: "Uses", href: "/uses" },
  ],
  uses: {
    workstation: [
      {
        title: 'Macbook Pro 14" w/ M1 Max (2021)',
        url: "https://www.apple.com/shop/buy-mac/macbook-pro/14-inch-space-gray-8-core-cpu-14-core-gpu-512gb",
        description:
          "A next level laptop. Having suffered through the trough of Jony Ive'd touchbar macbooks, I relish every chance I get to work on this machine. The great battery untethers me from coffee shop walls and the snappy performance closes the windows of distraction opened by long build times.",
      },
      {
        title: "Microsoft Sculpt Keyboard",
        url: "https://www.microsoft.com/en-us/d/microsoft-sculpt-ergonomic-desktop",
        description:
          "The second biggest threat to my career is RSI (right behind spending too much time on Hacker News). This ergonomic keyboard takes a bit to get used to, but it's the only one I've found to be reasonably priced, reasonably sized, and reasonably un-hideous.",
      },
      {
        title: "Steelcase Gesture Chair",
        url: "https://www.steelcase.com/products/office-chairs/gesture/",
        description:
          "Where my pandemic stimulus check went. The best thing I can say about this chair is that I don't think about it at all. Paired with a standing desk, it ensures the limiting reactant for my work is my brain and not the bag of meat it sits atop.",
      },
    ],
    productivity: [
      {
        title: "Alfred",
        url: "https://www.alfredapp.com/",
        description:
          "A fundamental way I interact with my machine. Clipboard history, text expansion, and file searching are what I use Alfred for the most, but it's also a friendly interface into `top` to check on and kill processes. One of these days I'll hook it into DALLE or GPT-3 and my productive output will approach ∞",
      },
      {
        title: "Rectangle",
        url: "https://rectangleapp.com/",
        description:
          "I'm somewhat shocked that Apple has yet to add a more sophisticated window management system to macOS. Until then I use the free and open source Rectangle app to bring a semblance of organization to my desktop.",
      },
      {
        title: "Itsycal",
        url: "https://www.mowglii.com/itsycal/",
        description:
          "A beautiful little calendar that lives in your menubar! Essentialy to get a quick look at my upcoming meetings and to jump into video calls.",
      },
      {
        title: "Homebrew",
        url: "https://github.com/ninjha01/dotfiles/blob/master/Brewfile",
        description:
          "The Missing Package Manager for macOS. If I can't `brew install` it, odds are good I won't use it.",
      },
    ],
    development: [
      {
        title: "Emacs",
        url: "https://github.com/ninjha01/dotfiles/blob/master/.emacs.d/init.el",
        description:
          "The oldest software I use. All of that time was spent on creating the most customizable and extensible text editor possible. Any cook worth their kosher salt has a good knife. No mere implement, it is their interface to the kitchen. And like all good interfaces it becomes invisible, melding and molding and bonding to its wielder. Emacs is my knife.",
      },
      {
        title: "zsh and Terminal.app",
        url: "https://github.com/ninjha01/dotfiles/blob/master/.zshrc",
        description:
          "The default shell and terminal on macOS. I shove most of the complexity of manipulating text, programs, and processes into emacs and thus don't have much need for fancy shells like `fish` or terminal emulators like `iTerm2`.",
      },
    ],
  },
  essays: [
    {
      title: "Universe",
      description:
        "I wasn't around to feel that fear back in the 90s. But I feel it now.",
      img: universe,
      url: "/essays/universe",
    },
    {
      title: "Software Ate the World",
      description: "Now It's Your Turn",
      img: squeeze,
      url: "/essays/squeeze",
    },
    {
      title: "Climbing the Tower of Abstraction",
      description: "The Dominance and Dilemma of Software",
      img: world_eater,
      url: "/essays/tower",
    },
  ],

  localTools: [
    {
      title: "DaVinci Text Generator",
      url: "/local/davinci",
      description:
        "An AI text generator that uses the OpenAI DaVinci API to generate text.",
    },
    {
      title: "Stable Diffusion",
      url: "/local/stablediffusion",
      description: "An AI image that runs locally.",
    },
  ],
};

export interface Project {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number | null;
}

export interface Achievement {
  title: string;
  detail: string;
  url?: string;
}

export interface StatusItem {
  label: string;
  value: string;
}

export interface Writing {
  name: string;
  url: string;
  note: string;
}

export const profile = {
  name: "Nugraha",
  status: [
    { label: "Availability", value: "IT / security internship, 2026" },
    { label: "Semester", value: "5th · Computer Engineering Technology, POLINES" },
    { label: "Based", value: "Semarang, Indonesia" },
    { label: "Currently", value: "hands-on security labs and lab-machine development" },
  ] as StatusItem[],
  links: {
    github: "https://github.com/setyanoegraha",
    linkedin: "https://www.linkedin.com/in/setyanoegraha/",
    email: "pandu4688@gmail.com",
  },
  projects: [
    { name: "ledger-tui", url: "https://github.com/setyanoegraha/ledger-tui", description: null, language: null, stars: null },
    { name: "nyx-tui", url: "https://github.com/setyanoegraha/nyx-tui", description: null, language: null, stars: null },
    { name: "hmv-tui", url: "https://github.com/setyanoegraha/hmv-tui", description: null, language: null, stars: null },
    { name: "dl-tui", url: "https://github.com/setyanoegraha/dl-tui", description: null, language: null, stars: null },
    { name: "webapp_osce", url: "https://github.com/setyanoegraha/webapp_osce", description: null, language: null, stars: null },
    { name: "hackmyvm-commandlineinterface", url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface", description: null, language: null, stars: null },
    { name: "revshell-tui", url: "https://github.com/setyanoegraha/revshell-tui", description: null, language: null, stars: null },
  ] as Project[],
  achievements: [
    {
      title: "260+ hands-on security labs completed",
      detail: "practical exercises across HackMyVM, DockerLabs and VulNyx platforms",
      url: "https://github.com/setyanoegraha?tab=repositories",
    },
    {
      title: "Published vulnerable lab machines",
      detail: "authored machines published on DockerLabs, HackMyVM and VulNyx",
      url: "https://github.com/setyanoegraha?tab=repositories",
    },
    {
      title: "Built own lab-progress toolkit",
      detail: "CLI tooling for tracking lab work",
      url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface",
    },
  ] as Achievement[],
  writing: [
    { name: "hackmyvm-writeups", url: "https://github.com/setyanoegraha/hackmyvm-writeups", note: "HackMyVM walkthroughs" },
    { name: "vulnyx-writeups", url: "https://github.com/setyanoegraha/vulnyx-writeups", note: "VulNyx walkthroughs" },
    { name: "dockerlabs-writeups", url: "https://github.com/setyanoegraha/dockerlabs-writeups", note: "DockerLabs walkthroughs" },
  ] as Writing[],
};

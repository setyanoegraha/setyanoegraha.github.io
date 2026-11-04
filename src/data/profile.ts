export interface Project {
  name: string; // display name, not the repo slug
  url: string;
  description: string;
  date: string; // "YYYY-MM", when the repo was created
}

export interface Milestone {
  title: string;
  detail: string; // supports [text](url) rendered by /milestones
  date: string; // "YYYY-MM"
  url?: string;
}

export const profile = {
  name: "Nugraha",
  links: {
    github: "https://github.com/setyanoegraha",
    linkedin: "https://www.linkedin.com/in/setyanoegraha/",
    email: "pandu4688@gmail.com",
  },
  projects: [
    {
      name: "Ledger",
      url: "https://github.com/setyanoegraha/ledger-tui",
      description: "Local bookkeeping for double-entry records, with charts and a SQLite store.",
      date: "2026-11",
    },
    {
      name: "Nyx Console",
      url: "https://github.com/setyanoegraha/nyx-tui",
      description: "Terminal dashboard for VulNyx: browse machines, track finished boxes and read writeups.",
      date: "2026-09",
    },
    {
      name: "HackMyVM Console",
      url: "https://github.com/setyanoegraha/hmv-tui",
      description: "Terminal dashboard for HackMyVM: machine catalog, downloads, flags and progress.",
      date: "2026-09",
    },
    {
      name: "DockerLabs Console",
      url: "https://github.com/setyanoegraha/dl-tui",
      description: "Terminal dashboard for DockerLabs: catalog, downloads and progress tracking.",
      date: "2026-09",
    },
    {
      name: "OSCE Assessor",
      url: "https://github.com/setyanoegraha/webapp_osce",
      description: "Web platform for clinical exam assessment, built for medical education staff.",
      date: "2026-02",
    },
    {
      name: "HMV CLI",
      url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface",
      description: "Command line tool to search HackMyVM machines, fetch them and submit flags.",
      date: "2025-12",
    },
    {
      name: "Shellcraft",
      url: "https://github.com/setyanoegraha/revshell-tui",
      description: "Offline reverse shell generator that runs entirely in the terminal.",
      date: "2026-11",
    },
  ] as Project[],
  milestones: [
    {
      title: "First HackMyVM walkthroughs published",
      detail: "started documenting every machine I finish",
      date: "2025-11",
      url: "https://github.com/setyanoegraha/hackmyvm-writeups",
    },
    {
      title: "Built HMV CLI",
      detail: "command line tool for searching machines, fetching them and submitting flags",
      date: "2025-12",
      url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface",
    },
    {
      title: "Released OSCE Assessor",
      detail: "web platform for clinical exam assessment used by medical education staff",
      date: "2026-02",
      url: "https://github.com/setyanoegraha/webapp_osce",
    },
    {
      title: "Added DockerLabs writeups",
      detail: "expanded the collection to DockerLabs walkthroughs.",
      date: "2026-03",
      url: "https://github.com/setyanoegraha/dockerlabs-writeups",
    },
    {
      title: "Added VulNyx writeups",
      detail: "brought the collection to VulNyx, with 39 walkthroughs in the first month.",
      date: "2026-08",
      url: "https://github.com/setyanoegraha/vulnyx-writeups",
    },
    {
      title: "Released three terminal dashboards",
      detail: "[HackMyVM Console](https://github.com/setyanoegraha/hmv-tui), [DockerLabs Console](https://github.com/setyanoegraha/dl-tui) and [Nyx Console](https://github.com/setyanoegraha/nyx-tui), all shipped in the same month.",
      date: "2026-09",
      url: "https://github.com/setyanoegraha/hmv-tui",
    },
    {
      title: "Published Groups on VulNyx",
      detail: "Medium-difficulty Linux machine with a redos and disk-group path",
      date: "2026-09",
      url: "https://vulnyx.com/",
    },
    {
      title: "Published Ledger on HackMyVM",
      detail: "accounting app with a CSV upload path to code execution",
      date: "2026-10",
      url: "https://hackmyvm.eu/",
    },
    {
      title: "Published Grenade on HackMyVM",
      detail: "WordPress box with an unauthenticated plugin vulnerability",
      date: "2026-10",
      url: "https://hackmyvm.eu/",
    },
    {
      title: "Published Hannah Coffee on DockerLabs",
      detail: "chained file inclusion and log poisoning up to root",
      date: "2026-08",
      url: "https://dockerlabs.es/",
    },
    {
      title: "Released Ledger and Shellcraft",
      detail: "[Ledger](https://github.com/setyanoegraha/ledger-tui), a SQLite bookkeeping app, and [Shellcraft](https://github.com/setyanoegraha/revshell-tui), an offline reverse shell generator.",
      date: "2026-11",
      url: "https://github.com/setyanoegraha/ledger-tui",
    },
  ] as Milestone[],
};

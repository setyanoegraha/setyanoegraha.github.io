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

export interface FeaturedWalkthrough {
  name: string;
  repo: string;
  platform: "VulNyx" | "HackMyVM" | "DockerLabs";
  prefix: string;
  summary: string;
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
      description: "Local double-entry bookkeeping app with visual charts and a SQLite store.",
      date: "2026-11",
    },
    {
      name: "Shellcraft",
      url: "https://github.com/setyanoegraha/revshell-tui",
      description: "Offline reverse shell generator that runs entirely in the terminal.",
      date: "2026-11",
    },
    {
      name: "Nyx Console",
      url: "https://github.com/setyanoegraha/nyx-tui",
      description: "Terminal dashboard for VulNyx to browse machines, track finished boxes, and read writeups.",
      date: "2026-09",
    },
    {
      name: "HackMyVM Console",
      url: "https://github.com/setyanoegraha/hmv-tui",
      description: "Terminal dashboard for HackMyVM covering machine catalogs, downloads, flag submissions, and progress.",
      date: "2026-09",
    },
    {
      name: "DockerLabs Console",
      url: "https://github.com/setyanoegraha/dl-tui",
      description: "Terminal dashboard for DockerLabs with catalog browsing, downloads, and progress tracking.",
      date: "2026-09",
    },
    {
      name: "OSCE Assessor",
      url: "https://github.com/setyanoegraha/webapp_osce",
      description: "Web platform built for medical education staff to manage clinical exam assessments.",
      date: "2026-02",
    },
    {
      name: "HMV CLI",
      url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface",
      description: "Command-line client to search HackMyVM targets, download machines, and submit flags.",
      date: "2025-12",
    },
  ] as Project[],
  milestones: [
    {
      title: "Released Ledger and Shellcraft",
      detail: "Shipped [Ledger](https://github.com/setyanoegraha/ledger-tui) and [Shellcraft](https://github.com/setyanoegraha/revshell-tui): a SQLite double-entry bookkeeping app and an offline reverse shell generator.",
      date: "2026-11",
    },
    {
      title: "Published Hannah Coffee on DockerLabs",
      detail: "Linux target chaining local file inclusion and log poisoning to gain root.",
      date: "2026-11",
      url: "https://dockerlabs.es/",
    },
    {
      title: "Published Ledger on HackMyVM",
      detail: "Vulnerable accounting web app featuring a CSV upload path to remote code execution.",
      date: "2026-10",
      url: "https://hackmyvm.eu/",
    },
    {
      title: "Published Grenade on HackMyVM",
      detail: "WordPress target centered around an unauthenticated plugin vulnerability.",
      date: "2026-10",
      url: "https://hackmyvm.eu/",
    },
    {
      title: "Released three terminal dashboards",
      detail: "Shipped [HackMyVM Console](https://github.com/setyanoegraha/hmv-tui), [DockerLabs Console](https://github.com/setyanoegraha/dl-tui) and [Nyx Console](https://github.com/setyanoegraha/nyx-tui) in the same month.",
      date: "2026-09",
    },
    {
      title: "Published Groups on VulNyx",
      detail: "Medium-difficulty Linux machine chaining ReDoS with disk-group privilege escalation.",
      date: "2026-09",
      url: "https://vulnyx.com/",
    },
    {
      title: "Added VulNyx writeups",
      detail: "Published an initial batch of 39 VulNyx walkthroughs in a single month.",
      date: "2026-08",
      url: "https://github.com/setyanoegraha/vulnyx-writeups",
    },
    {
      title: "Added DockerLabs writeups",
      detail: "Started documenting exploitation notes for DockerLabs containers.",
      date: "2026-03",
      url: "https://github.com/setyanoegraha/dockerlabs-writeups",
    },
    {
      title: "Released OSCE Assessor",
      detail: "Deployed a clinical exam assessment web platform for medical education staff.",
      date: "2026-02",
      url: "https://github.com/setyanoegraha/webapp_osce",
    },
    {
      title: "Built HMV CLI",
      detail: "Created a terminal client for searching HackMyVM machines, fetching files, and submitting flags.",
      date: "2025-12",
      url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface",
    },
    {
      title: "First HackMyVM walkthroughs published",
      detail: "Began writing public documentation for every machine I root.",
      date: "2025-11",
      url: "https://github.com/setyanoegraha/hackmyvm-writeups",
    },
  ] as Milestone[],
};

export const featuredWalkthroughs: FeaturedWalkthrough[] = [
  {
    name: "groups",
    repo: "vulnyx-writeups",
    platform: "VulNyx",
    prefix: "",
    summary: "Exploited a Werkzeug regex denial-of-service via catastrophic backtracking to bypass worker processes, followed by group membership abuse for root privilege escalation."
  },
  {
    name: "ledger",
    repo: "hackmyvm-writeups",
    platform: "HackMyVM",
    prefix: "machines/",
    summary: "Weaponized an unsanitized multipart filename in a Werkzeug CSV upload endpoint for arbitrary code execution, pivoting through SSH to a SUID binary."
  },
  {
    name: "grenade",
    repo: "hackmyvm-writeups",
    platform: "HackMyVM",
    prefix: "machines/",
    summary: "Chained unauthenticated PHP object injection in WordPress GiveWP (CVE-2026-82222) to achieve remote code execution and local credential dumping."
  },
  {
    name: "hannah_coffee",
    repo: "dockerlabs-writeups",
    platform: "DockerLabs",
    prefix: "",
    summary: "Chained an unsanitized studio parameter local file inclusion with vsftpd log poisoning to establish a web shell and leverage Linux file capabilities."
  }
];

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
  platform?: "VulNyx" | "HackMyVM" | "DockerLabs" | "GitHub";
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
      name: "CareKicks",
      url: "https://github.com/setyanoegraha/CareKicks-FE",
      description: "Shoe laundry marketplace featuring a Flutter mobile app for customers, a web onboarding portal for vendors, and a REST API.",
      date: "2026-07",
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
      title: "Published Ledger on HackMyVM",
      detail: "Vulnerable accounting web app featuring a CSV upload path to remote code execution.",
      date: "2026-10",
      url: "https://mega.nz/file/GoNACBLb#sop2lHrgbCcQ9EDUR7CnnXDmR9dT-WJ-fW09LrHVNkk",
      platform: "HackMyVM",
    },
    {
      title: "Published Grenade on HackMyVM",
      detail: "WordPress target centered around an unauthenticated plugin vulnerability.",
      date: "2026-10",
      url: "https://mega.nz/file/S8VlnTCD#8XTl0EhUr8T_KXboLueBto1yeunPIynR0RH5sQGaz9U",
      platform: "HackMyVM",
    },
    {
      title: "Published Groups on VulNyx",
      detail: "Medium-difficulty Linux machine chaining ReDoS with disk-group privilege escalation.",
      date: "2026-09",
      url: "https://drive.proton.me/urls/7QBFCDNHBR#3F47dtm2zEzR",
      platform: "VulNyx",
    },
    {
      title: "Added VulNyx writeups",
      detail: "Published an initial batch of 39 VulNyx walkthroughs in a single month.",
      date: "2026-08",
      url: "https://github.com/setyanoegraha/vulnyx-writeups",
      platform: "VulNyx",
    },
    {
      title: "Published Hannah Coffee on DockerLabs",
      detail: "Linux target chaining local file inclusion and log poisoning to gain root.",
      date: "2026-08",
      url: "https://gestion-maquinas.dockerlabs.es/dl/hannah_coffee.zip",
      platform: "DockerLabs",
    },
    {
      title: "Added DockerLabs writeups",
      detail: "Started documenting exploitation notes for DockerLabs containers.",
      date: "2026-03",
      url: "https://github.com/setyanoegraha/dockerlabs-writeups",
      platform: "DockerLabs",
    },
    {
      title: "First HackMyVM walkthroughs published",
      detail: "Began writing public documentation for every machine I root.",
      date: "2025-11",
      url: "https://github.com/setyanoegraha/hackmyvm-writeups",
      platform: "HackMyVM",
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

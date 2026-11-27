export interface MilestoneLink {
  label: string;
  url: string;
  external?: boolean;
}

export interface MilestoneDetail {
  slug: string;
  title: string;
  date: string; // "YYYY-MM"
  summary: string; // spoiler-free summary for /milestones index
  lore: string; // spoiler-free narrative visible immediately
  playLinks: MilestoneLink[];
  spoiler?: {
    diagram: string;
    diagramHeight: number;
    diagramCaption: string;
    buildNotes: string;
    writeupLinks: MilestoneLink[];
  };
}

export const milestones: MilestoneDetail[] = [
  {
    slug: "ledger-machine",
    title: "Published Ledger on HackMyVM",
    date: "2026-10",
    summary: "Small accounting web target built and released for HackMyVM.",
    lore: `After building personal finance tools in the terminal, I wanted to design a vulnerable machine around an everyday office app instead of a contrived CTF puzzle. Ledger drops you in front of SimpleLedger, a stripped-down web portal used to upload accounting sheets and view reports.

I built and tested this VM on VirtualBox. If you want to play it blind, download the archive below, import the OVA on your lab network, and start with standard service enumeration. Everything needed to move from initial access to root lives inside the box with no guessing.`,
    playLinks: [
      {
        label: "Download VM on MEGA",
        url: "https://mega.nz/file/GoNACBLb#sop2lHrgbCcQ9EDUR7CnnXDmR9dT-WJ-fW09LrHVNkk",
        external: true,
      },
    ],
    spoiler: {
      diagram: "/images/milestones/ledger-machine-system.svg",
      diagramHeight: 225,
      diagramCaption: "Privilege escalation ladder from the unprivileged SimpleLedger web service to root.",
      buildNotes: `I built SimpleLedger as a small Python Werkzeug app on port 5000 alongside SSH on port 22. Inside the CSV upload handler, I deliberately wired the multipart filename straight into a shell command without sanitization so players spot the injection by watching how the upload behaves.

Rather than hiding credentials behind brute-force wordlists, I placed an encoded SSH password for the local finance user inside a process environment variable. For root, I compiled a minimal setuid C archiver that copies files without validating destination paths, giving that account a clean write path into sudoers.`,
      writeupLinks: [
        {
          label: "Read full walkthrough",
          url: "/writing/hackmyvm#hackmyvm-writeups/machines/ledger",
        },
      ],
    },
  },
  {
    slug: "grenade",
    title: "Published Grenade on HackMyVM",
    date: "2026-10",
    summary: "WordPress target hosted on AlmaLinux for HackMyVM.",
    lore: `Grenade was my attempt at building a box on AlmaLinux with SELinux active rather than using the usual Debian or Ubuntu defaults. On the surface it presents a straightforward charity donation site running WordPress.

Built and tested on VirtualBox, the VM lets players feel what happens when an initial shell lands inside a tightly confined web context instead of an unrestricted Linux host. Grab the OVA below if you want to try breaking out on your own first.`,
    playLinks: [
      {
        label: "Download VM on MEGA",
        url: "https://mega.nz/file/S8VlnTCD#8XTl0EhUr8T_KXboLueBto1yeunPIynR0RH5sQGaz9U",
        external: true,
      },
    ],
    spoiler: {
      diagram: "/images/milestones/grenade-system.svg",
      diagramHeight: 235,
      diagramCaption: "Breaking out of SELinux web confinement over SSH before escalating on the AlmaLinux kernel.",
      buildNotes: `I set up Apache on port 8080 inside AlmaLinux with SELinux active, serving WordPress 6.6.2 and GiveWP 4.16.5.1. That plugin version is vulnerable to CVE-2026-82222, an unauthenticated PHP object injection flaw in the donation form flow that chains unsafe deserialization into remote code execution, landing as the web user trapped inside the HTTP domain.

To give players a way out of that sandbox, I stored an encoded credential backup on disk that opens a regular SSH session as a local user without HTTP confinement. From there, I paired the box with an AlmaLinux 10 Linux 6.12 kernel affected by Dirty Frag (CVE-2026-43284 in xfrm-ESP and CVE-2026-43500 in RxRPC), two page-cache write bugs that let an unprivileged user overwrite read-only memory pages and escalate to root.`,
      writeupLinks: [
        {
          label: "Read full walkthrough",
          url: "/writing/hackmyvm#hackmyvm-writeups/machines/grenade",
        },
      ],
    },
  },
  {
    slug: "groups",
    title: "Published Groups on VulNyx",
    date: "2026-09",
    summary: "Medium-difficulty Alpine Linux target built for VulNyx.",
    lore: `Most boxes ask you to find a missing input check or a forgotten password. With Groups, I wanted to build something around application availability and a maintenance shortcut gone wrong. The machine simulates an internal log console called logiscope running on a minimal Alpine host.

Built and tested on VirtualBox, this VM invites you to explore the service blind before looking at how the watchdog and system groups interact.`,
    playLinks: [
      {
        label: "Download VM on Proton Drive",
        url: "https://drive.proton.me/urls/7QBFCDNHBR#3F47dtm2zEzR",
        external: true,
      },
    ],
    spoiler: {
      diagram: "/images/milestones/groups-system.svg",
      diagramHeight: 250,
      diagramCaption: "How stalling the single-process Python web app triggers a fail-open cron shell with raw block-device access.",
      buildNotes: `I built logiscope as a single-process Werkzeug server on a one-vCPU Alpine VM where an admin form accepts custom regex rules. Because a backtracking pattern locks Python's global interpreter lock on every event, even the separate health probe hangs when the server gets flooded.

Around that bottleneck, I added a minute-by-minute cron watchdog that fails open after two missed health checks by opening a recovery netcat listener on port 8090 as a setup user. Putting that account in the disk group lets players read and write the raw root partition directly, patching Alpine's privilege config past normal file permissions.`,
      writeupLinks: [
        {
          label: "Read full walkthrough",
          url: "/writing/vulnyx#vulnyx-writeups/groups",
        },
      ],
    },
  },
  {
    slug: "vulnyx-writeups",
    title: "Added VulNyx writeups",
    date: "2026-08",
    summary: "Published an initial batch of 39 VulNyx walkthroughs in one month.",
    lore: `After spending months rooting HackMyVM and DockerLabs boxes, I moved into VulNyx and started documenting every solve consistently from the first scan to root. Pushing 39 writeups in a single month forced me to standardize how I take notes, capture evidence, and summarize attack chains without skipping dead ends.

Each report stays structured so anyone stuck on a box can read just the hint they need or follow the entire chain end to end, and the site fetches the full index directly from my archive.`,
    playLinks: [
      {
        label: "Browse VulNyx walkthroughs",
        url: "/writing/vulnyx",
      },
    ],
  },
  {
    slug: "hannah-coffee",
    title: "Published Hannah Coffee on DockerLabs",
    date: "2026-08",
    summary: "Lightweight cafe web container built and shipped for DockerLabs.",
    lore: `Hannah Coffee was the first vulnerable target I built from scratch as a portable Docker container. I wanted a beginner-friendly box with classic service interaction rather than a single isolated web bug, wrapped inside a small coffee shop site.

You can download the container bundle below and spin it up locally before checking how the services connect inside.`,
    playLinks: [
      {
        label: "Download container on DockerLabs",
        url: "https://gestion-maquinas.dockerlabs.es/dl/hannah_coffee.zip",
        external: true,
      },
    ],
    spoiler: {
      diagram: "/images/milestones/hannah-coffee-system.svg",
      diagramHeight: 245,
      diagramCaption: "Multi-daemon Debian container chaining FTP log poisoning, ext4 image inspection, and file capabilities.",
      buildNotes: `I assembled the Debian container with supervisord running Apache on port 80 and vsftpd on port 21 together so both services touch the same FTP log. While the main navigation parameter stays whitelisted, I left a sibling parameter unvalidated inside PHP's include function, letting players execute PHP injected through an FTP login username.

Once on the box as the web user, a sudo rule grants access to an ext4 debugger over a 64 MB disk image holding an encoded user password (alongside the debugger's shell escape). For root, I placed a copy of Python with the setuid capability enabled so the user account can raise its UID to zero.`,
      writeupLinks: [
        {
          label: "Read full walkthrough",
          url: "/writing/dockerlabs#dockerlabs-writeups/hannah_coffee",
        },
      ],
    },
  },
  {
    slug: "dockerlabs-writeups",
    title: "Added DockerLabs writeups",
    date: "2026-03",
    summary: "Started documenting exploitation notes for DockerLabs containers.",
    lore: `When I began practicing on DockerLabs containers, I wanted a dedicated place for fast, repeatable writeups alongside my HackMyVM notes. Containers boot in seconds, which makes it easy to test different exploitation paths and verify fixes without waiting on full virtual machine snapshots.

Writing each solve down right after finishing helped turn scattered terminal histories into clean reference notes covering enumeration, service misconfigurations, and privilege escalation.`,
    playLinks: [
      {
        label: "Browse DockerLabs walkthroughs",
        url: "/writing/dockerlabs",
      },
    ],
  },
  {
    slug: "hackmyvm-writeups",
    title: "First HackMyVM walkthroughs published",
    date: "2025-11",
    summary: "Began writing public documentation for every machine I root.",
    lore: `This is where the habit started. Early on, I used to finish a machine, grab the root flag, and immediately move on to the next one, only to forget half the techniques a month later. Publishing every HackMyVM writeup forced me to verify commands, explain why an exploit worked, and keep clean records.

What started as a handful of Markdown files eventually grew past a hundred machine reports and shaped the workflow I still use across all three platforms.`,
    playLinks: [
      {
        label: "Browse HackMyVM walkthroughs",
        url: "/writing/hackmyvm",
      },
    ],
  },
];

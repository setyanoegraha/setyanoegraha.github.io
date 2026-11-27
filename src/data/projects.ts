export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectDetail {
  slug: string;
  name: string;
  date: string; // "YYYY-MM"
  summary: string;
  diagram?: string;
  diagramHeight?: number;
  diagramCaption?: string;
  screenshot?: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
  screenshotCaption?: string;
  links: ProjectLink[];
  content: string;
}

export const projects: ProjectDetail[] = [
  {
    slug: "ledger",
    name: "Ledger",
    date: "2026-11",
    summary: "Local double-entry bookkeeping with SQLite storage and TUI charts.",
    diagram: "/images/projects/ledger-system.svg",
    diagramHeight: 250,
    diagramCaption: "How balanced entries move from the inline form into a single SQLite file and roll up into charts and reports.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/ledger-tui" },
    ],
    content: `I wanted a place to track my personal finances without handing my spending history to a cloud app, paying for a subscription, or opening a browser just to log lunch. Most desktop apps felt too heavy, and plain spreadsheets get messy as soon as you try to track bank transfers alongside expenses.

So I built Ledger to run inside a terminal and store everything in one local SQLite file. Every entry follows double-entry accounting: money never appears from nowhere, it moves from one account to another. When I record a meal, one side adds to my food expenses and the other subtracts the exact same amount from cash or a bank account. Before anything gets saved, the app checks that the split sums to zero, and it stores values as integer cents so rounding drift never creeps in.

## Rolling accounts up without folders

Accounts are organized by colons in their name, such as an expense category or a specific bank under assets. Whenever I inspect the Accounts or Reports views, child accounts automatically roll up into their parent totals without needing manual folders or parent IDs.

Across four views, the dashboard plots a 12-month net worth curve, six months of income against expenses, and the top spending categories for whichever month I am browsing. Pressing a key jumps straight into a register for any account or generates a balance sheet and trial balance that prove the books add up.`,
  },
  {
    slug: "shellcraft",
    name: "Shellcraft",
    date: "2026-11",
    summary: "Offline reverse shell generator built to run inside the terminal.",
    diagram: "/images/projects/shellcraft-system.svg",
    diagramHeight: 225,
    diagramCaption: "Compile-time dataset bundled into an offline binary, keeping runtime substitution and clipboard copy self-contained.",
    screenshot: "/images/projects/shellcraft-screen.png",
    screenshotWidth: 1150,
    screenshotHeight: 780,
    screenshotCaption: "Shellcraft reverse tab rendered in its Amber CRT palette with live IP, port, and listener preview.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/revshell-tui" },
    ],
    content: `During lab sessions on HackMyVM or VulNyx, I kept breaking focus to open a browser tab just to copy a reverse shell from revshells.com. My workspace was already inside tmux, so switching windows for a single one-liner felt like unnecessary friction, especially when working offline or over SSH.

Shellcraft solves that by packing an unofficial terminal port of the reverse-shell generator dataset directly into a single binary. There is no server running in the background and no network lookup when you open it; all 135 payloads, 17 listeners, and 16 shells are ready the moment the screen draws.

## Encoding without losing context

As I edit the target IP, port, or preferred shell, the app tracks where those values land inside each template so they remain highlighted in bright amber even after URL, double-URL, or Base64 encoding transforms the command. Special templates that expect raw hex bytes or UTF-16 PowerShell strings handle those conversions automatically.

The listener pane stays synced with the selected port and warns me if a chosen listener has issues under UDP mode. When a command is ready, pressing a key copies it straight to my local clipboard using terminal escape sequences, which still works cleanly even inside a remote SSH session.`,
  },
  {
    slug: "nyx-console",
    name: "Nyx Console",
    date: "2026-09",
    summary: "Terminal dashboard for VulNyx catalogs, flags, and writeups.",
    diagram: "/images/projects/nyx-console-system.svg",
    diagramHeight: 265,
    diagramCaption: "Two-track VulNyx workflow: public catalog and ranking on top, paired with CAPTCHA decoding and Proton Drive streaming.",
    screenshot: "/images/projects/nyx-console-screen.png",
    screenshotWidth: 1920,
    screenshotHeight: 1004,
    screenshotCaption: "Machines tab in Nyx Console showing difficulty tags, OS badges, first-blood availability, and live status footer.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/nyx-tui" },
    ],
    content: `After solving dozens of VulNyx machines, checking the site repeatedly for fresh releases, open first-blood slots, or community writeups started feeling repetitive. VulNyx does not require an account at all, just a handle, which made it a natural fit for a lightweight terminal dashboard.

The trickiest part was downloading virtual machines without leaving the terminal. VulNyx protects its download links with a five-character dotted CAPTCHA image and hosts the archives on Proton Drive. I wanted pressing the download key to handle the whole trip automatically instead of bouncing me back to a browser.

## Clearing the download gate and ranking locally

Nyx Console pulls the public catalog, writeups, and first-blood records directly into one screen where I can filter, sort, submit MD5 flags, or publish new writeups with type and language pickers. It also computes my leaderboard rank locally from public data using the site's exact scoring rules and staff exclusions.

When I trigger a download, the app fetches the 160x50 CAPTCHA image, decodes the PNG in memory, and matches each dotted glyph against exact bitmap templates. If the site ever changes its font, it backs off safely and opens the browser instead of guessing. Once the gate clears, it negotiates the Proton Drive share key and streams up to two archives in parallel straight to my downloads folder.`,
  },
  {
    slug: "hackmyvm-console",
    name: "HackMyVM Console",
    date: "2026-09",
    summary: "Terminal dashboard for HackMyVM boxes, downloads, and flags.",
    diagram: "/images/projects/hackmyvm-console-system.svg",
    diagramHeight: 250,
    diagramCaption: "OS vault login driving the four-tab workspace and parallel MEGA chunk decryption with integrity checks.",
    screenshot: "/images/projects/hackmyvm-console-screen.png",
    screenshotWidth: 1440,
    screenshotHeight: 756,
    screenshotCaption: "Stats tab in HackMyVM Console showing personal progress gauges, rank breakdown, and navigation tabs.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/hmv-tui" },
    ],
    content: `HackMyVM Console started after my earlier Python CLI tool outgrew simple subcommands and HackMyVM overhauled its platform endpoints. Rather than juggling terminal commands for listing boxes, downloading VMs from MEGA, and checking my solve stats, I wanted everything visible on one dashboard.

I also wanted to stop relying on external download helpers. HackMyVM hosts most of its machines on MEGA, and installing extra wrappers just to pull a zip file always felt brittle across machines.

## Streaming and verifying archives directly

On first launch, the app asks for my HackMyVM credentials and verifies them with a real login before saving anything. My password goes straight into the operating system's secret vault, while only my username and preferred download folder touch a local config file. From there, four tabs cover stats, the full 379+ machine catalog, upcoming releases, and creator VM submissions.

When I download a machine, a built-in MEGA client resolves the file metadata, decrypts the filename, and streams chunks directly to a staging file while decrypting and verifying each chunk's integrity on the fly. Up to two downloads run at once while extra requests wait in queue, and the file only gets its final name after the integrity check passes.`,
  },
  {
    slug: "dockerlabs-console",
    name: "DockerLabs Console",
    date: "2026-09",
    summary: "Terminal dashboard for DockerLabs containers and certificates.",
    diagram: "/images/projects/dockerlabs-console-system.svg",
    diagramHeight: 250,
    diagramCaption: "Keyring-authenticated DockerLabs session radiating into catalog browsing, ratings, downloads, and certificates.",
    screenshot: "/images/projects/dockerlabs-console-screen.png",
    screenshotWidth: 905,
    screenshotHeight: 514,
    screenshotCaption: "Máquinas tab in DockerLabs Console displaying difficulty colors, categories, and action shortcuts.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/dl-tui" },
    ],
    content: `By the time I had terminal dashboards running for HackMyVM and VulNyx, switching back to a browser for DockerLabs felt out of place. I built DockerLabs Console so all three practice platforms I spend time on share the same keyboard-driven workflow inside my terminal.

Unlike VulNyx, almost everything on DockerLabs is tied to an account: personal completion progress, machine ratings, writeup submissions, and completion certificates. I kept the interface in Spanish to stay faithful to the original site's terms while keeping the layout consistent with my other consoles.

## Ratings, writeups, and certificates

The app opens with a login prompt backed by the operating system's credential vault so passwords never sit in plain text. Once signed in, I can browse the full container catalog with official difficulty colors, check or submit four-criteria machine ratings, read community guides, and track which completed boxes still need a writeup from me.

Downloads stream up to two containers in parallel into staging files with zsh-style Tab path completion for choosing destinations. For boxes I have finished, a single key fetches the issued PDF certificate into a local folder, or tells me which requirement is still missing if the admin has not issued it yet.`,
  },
  {
    slug: "carekicks",
    name: "CareKicks",
    date: "2026-07",
    summary: "Shoe laundry marketplace with mobile, web, and API backends.",
    diagram: "/images/projects/carekicks-system.svg",
    diagramHeight: 270,
    diagramCaption: "Mobile clients and the web portal sharing one central REST API backed by database, push, and email services.",
    links: [
      { label: "Flutter App (CareKicks-FE)", url: "https://github.com/setyanoegraha/CareKicks-FE" },
      { label: "Web Portal (CareKicks-Web)", url: "https://github.com/setyanoegraha/CareKicks-Web" },
      { label: "Backend API (CareKicks-BE)", url: "https://github.com/setyanoegraha/CareKicks-BE" },
    ],
    content: `CareKicks came out of looking at how local shoe laundry shops handle day-to-day orders. Most transactions still happen across scattered WhatsApp chats, paper receipts, and manual bank transfers, which makes it hard for customers to track their shoes and hard for owners to manage queues and stock.

We split the solution into three repositories so each user group gets the interface that fits how they actually work: a mobile app for customers and shop staff, a web portal for partner onboarding and platform moderation, and one central backend tying both together.

## Three surfaces sharing one order pipeline

Customers open the Flutter app to locate nearby shoe laundry shops on a map, pick cleaning services, send pickup or drop-off orders, upload payment proofs, and watch status updates via push notifications. Inside the same mobile app, shop admins switch to an operations view to scan order QR codes at handoff, manage queues and inventory, set opening hours, and record walk-in orders.

Partner verification and platform oversight live in the Next.js web portal, where superadmins approve new shops, monitor order trends, and review flagged accounts. Every request flows through one REST API backed by a relational database and image storage, with scheduled checks expiring unpaid orders, email verification links, and real-time push alerts keeping mobile clients in sync.`,
  },
  {
    slug: "osce-assessor",
    name: "OSCE Assessor",
    date: "2026-02",
    summary: "Web platform for medical staff to run clinical exam assessments.",
    diagram: "/images/projects/osce-assessor-system.svg",
    diagramHeight: 250,
    diagramCaption: "Exam lifecycle across Administrator, Examiner, and Student roles from station setup to Excel and PDF reporting.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/webapp_osce" },
    ],
    content: `In medical and health education, an Objective Structured Clinical Examination puts students through timed clinical stations while examiners score detailed competency checklists. Running those exams on paper rubrics means staff end up spending hours re-typing scores into spreadsheets after every session.

OSCE Assessor was built for medical education staff to bring scheduling, live station grading, and grade recapitulation under one web platform so examiners can focus on observing students rather than shuffling clipboards.

## Moving off paper rubrics

The system separates access cleanly across three roles. Administrators set up exam sessions, rooms, time slots, clinical stations, and weighted rubric criteria, then import student rosters from Excel templates and enroll participants into stations.

During an exam, examiners see the active rotation queue for their assigned station and score each competency point live from their screen, with options to review or adjust submitted grades when authorized. Afterward, students log in to check schedules and feedback, while staff export finalized recaps straight to Excel or printable PDF grade sheets.`,
  },
  {
    slug: "hmv-cli",
    name: "HMV CLI",
    date: "2025-12",
    summary: "Python CLI to search HackMyVM boxes, pull VMs, and submit flags.",
    diagram: "/images/projects/hmv-cli-system.svg",
    diagramHeight: 190,
    diagramCaption: "Sequential CLI command path from keyring unlock and HTML parsing to MEGA archive downloads.",
    screenshot: "/images/projects/hmv-cli-screen.png",
    screenshotWidth: 1887,
    screenshotHeight: 733,
    screenshotCaption: "Terminal table output in HMV CLI listing HackMyVM machines, difficulties, creators, and Pwned status.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/setyanoegraha/hackmyvm-commandlineinterface" },
    ],
    content: `HMV CLI was my first real attempt at automating HackMyVM from the terminal, months before I rewrote the idea into HackMyVM Console. At the time, I just wanted quick shell commands to search for a beginner box, check whether I had already solved it, grab the VM archive, and submit a flag without leaving my terminal.

Keeping it as a subcommand CLI made it fast to script and easy to use mid-session. I wrote it in Python so I could iterate quickly on HTML scraping and terminal formatting before ever thinking about building a full-screen TUI.

## Where the console idea started

After running an initial setup command to save credentials in the operating system's keyring, every command opens an authenticated session against HackMyVM, parses the machine pages into clean terminal tables, and syncs global Pwned status.

To download a machine, the tool follows HackMyVM's download redirect to uncover the underlying MEGA link, checks for local filename collisions, and streams the archive with a live progress bar. That early experiment proved how much time terminal automation saved me and eventually grew into the Rust console.`,
  },
];

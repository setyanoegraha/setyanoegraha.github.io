export interface Post {
  title: string;
  date: string; // YYYY-MM-DD
  summary?: string;
  category: "Note" | "Essay" | "Substack";
  slug: string;
  content?: string; // Native markdown or HTML content
  externalUrl?: string; // External URL if hosted on Substack or elsewhere
}

// Add new essays, casual notes, or Substack cross-posts here.
// If externalUrl is provided, clicking the title directly opens the external article in a new tab.
// If externalUrl is omitted, the post is served natively on-site at /writing/[slug].
export const posts: Post[] = [
  {
    title: "Box",
    slug: "box",
    date: "2026-11-23",
    category: "Essay",
    content: `Staying with what feels comfortable is an easy choice. Familiar routines offer stability and demand little effort, making avoidance feel reasonable rather than intentional. Capability is there, but comfort keeps getting picked because it feels safer—again, just because it feels safe.

What is avoided does not disappear. It lingers in quiet moments, in the sense that something remains untested. Comfort keeps life steady, but it also limits growth, slowly turning potential into a source of pressure rather than possibility and opportunity.

How long can safety be chosen over progress? The real cost is not failure, but time passing while ability remains unused.

Did you see the trap?`,
  },
  {
    title: "Left to Read",
    slug: "left-to-read",
    date: "2026-11-20",
    category: "Essay",
    content: `At twenty-two, it is easy to feel the weight of dreams left behind and choices delayed for too long. There were moments when everything seemed clear, but the steps were never taken. Days turned into months, and hesitation built a wall between what was wanted and what was done. Fear of choosing wrongly made staying still feel safer, even while time moved forward.

Regret does not appear suddenly; it grows quietly in the silence of inaction. The dreams remain, but they no longer carry the same spark, and the path ahead is no longer as simple as it once looked.

Now the question is not whether the dream can be reached, but whether the courage to act will ever be greater than the fear of trying.

And if it is not, how many more years will pass before a step is finally taken?`,
  },
];

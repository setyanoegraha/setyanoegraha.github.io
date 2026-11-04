export interface Post {
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  category: "Note" | "Essay" | "Substack";
  slug: string;
  content?: string; // Native markdown or HTML content
  externalUrl?: string; // External URL if hosted on Substack or elsewhere
}

// Add new essays, casual notes, or Substack cross-posts here.
// If externalUrl is provided, clicking the title directly opens the external article in a new tab.
// If externalUrl is omitted, the post is served natively on-site at /writing/[slug].
export const posts: Post[] = [];

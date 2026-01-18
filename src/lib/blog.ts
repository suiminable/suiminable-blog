import type { TagCode } from "@/lib/tags";

export type BlogListItem = {
  url: string;
  title: string;
  description?: string;
  date: string;
  lastModified?: Date;
  tags?: TagCode[];
};

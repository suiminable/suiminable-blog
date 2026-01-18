"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import BlogLinkCard from "@/components/blog-link-card";
import TagChip from "@/components/tag-chip";
import type { BlogListItem } from "@/lib/blog";
import { toTimestamp } from "@/lib/date";
import { isTagCode, TAGS, type TagCode } from "@/lib/tags";

type BlogIndexClientProps = {
  pages: BlogListItem[];
};

export default function BlogIndexClient({ pages }: BlogIndexClientProps) {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");
  const selectedTag = tagParam && isTagCode(tagParam) ? tagParam : undefined;

  const sortedPages = useMemo(() => {
    return pages
      .slice()
      .sort((firstPage, secondPage) => {
        return toTimestamp(secondPage.date) - toTimestamp(firstPage.date);
      })
      .filter((page) => {
        if (!selectedTag) return true;
        return page.tags?.includes(selectedTag) ?? false;
      });
  }, [pages, selectedTag]);

  const tagEntries = Object.entries(TAGS);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <TagChip href="/blog" isActive={!selectedTag}>
          すべて
        </TagChip>
        {tagEntries.map(([tagCode, tag]) => (
          <TagChip
            key={tagCode}
            href={`/blog?tag=${encodeURIComponent(tagCode)}`}
            isActive={selectedTag === tagCode}
          >
            {tag.label}
          </TagChip>
        ))}
      </div>
      <div className="mt-8 space-y-6">
        {sortedPages.length === 0 ? (
          <p className="rounded-lg border border-neutral-200/40 p-4 text-sm text-neutral-500">
            記事はまだありません。
          </p>
        ) : (
          sortedPages.map((page) => (
            <BlogLinkCard
              key={page.url}
              url={page.url}
              title={page.title}
              description={page.description}
              createdAt={page.date}
              updatedAt={page.lastModified}
              tags={page.tags}
            />
          ))
        )}
      </div>
    </>
  );
}

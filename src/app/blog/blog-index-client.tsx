"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import TagChip from "@/components/tag-chip";
import { formatDate, toTimestamp } from "@/lib/date";
import { getTagLabel, isTagCode, TAGS, type TagCode } from "@/lib/tags";

type BlogListItem = {
  url: string;
  title: string;
  description?: string;
  date: string;
  tags?: TagCode[];
};

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
            <Link
              key={page.url}
              href={page.url}
              className="block rounded-lg border border-neutral-200/40 p-5 no-underline transition hover:border-neutral-300"
            >
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  {formatDate(page.date) ? (
                    <time
                      dateTime={page.date}
                      className="text-xs text-neutral-500"
                    >
                      作成日 {formatDate(page.date)}
                    </time>
                  ) : null}
                  {page.tags && page.tags.length > 0 ? (
                    <div className=" flex flex-wrap gap-2">
                      {page.tags.map((tag) => (
                        <TagChip key={tag}>{getTagLabel(tag)}</TagChip>
                      ))}
                    </div>
                  ) : null}
                </div>
                <h2 className="text-xl">{page.title}</h2>
                {page.description ? (
                  <p className="mt-2 text-sm text-neutral-500">
                    {page.description}
                  </p>
                ) : null}
              </article>
            </Link>
          ))
        )}
      </div>
    </>
  );
}

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import Link from "next/link";
import { formatDate, toTimestamp } from "@/lib/date";
import { blogSource } from "@/lib/source";

export default function BlogIndexPage() {
  const pages = blogSource
    .getPages()
    .slice()
    .sort((firstPage, secondPage) => {
      return (
        toTimestamp(secondPage.data.date) - toTimestamp(firstPage.data.date)
      );
    });

  return (
    <DocsPage>
      <DocsTitle>Blog</DocsTitle>
      <DocsDescription>記事一覧です</DocsDescription>
      <DocsBody>
        <div className="mt-8 space-y-6">
          {pages.length === 0 ? (
            <p className="rounded-lg border border-neutral-200/40 p-4 text-sm text-neutral-500">
              No posts yet.
            </p>
          ) : (
            pages.map((page) => (
              <Link
                key={page.url}
                href={page.url}
                className="block rounded-lg border border-neutral-200/40 p-5 no-underline transition hover:border-neutral-300"
              >
                <article>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="text-xl font-semibold">{page.data.title}</h2>
                    {formatDate(page.data.date) ? (
                      <time
                        dateTime={page.data.date}
                        className="text-xs text-neutral-500"
                      >
                        作成日 {formatDate(page.data.date)}
                      </time>
                    ) : null}
                  </div>
                  {page.data.description ? (
                    <p className="mt-2 text-sm text-neutral-500">
                      {page.data.description}
                    </p>
                  ) : null}
                </article>
              </Link>
            ))
          )}
        </div>
      </DocsBody>
    </DocsPage>
  );
}

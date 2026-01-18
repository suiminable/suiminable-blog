import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { Suspense } from "react";
import BlogIndexClient from "@/app/blog/blog-index-client";
import { blogSource } from "@/lib/source";

export default function BlogIndexPage() {
  const pages = blogSource.getPages().map((page) => ({
    url: page.url,
    title: page.data.title,
    description: page.data.description,
    date: page.data.date ?? "",
    lastModified: page.data.lastModified,
    tags: page.data.tags,
  }));

  return (
    <DocsPage>
      <DocsTitle>Blog</DocsTitle>
      <DocsDescription>記事一覧です</DocsDescription>
      <DocsBody>
        <Suspense
          fallback={
            <div className="text-sm text-neutral-500">読み込み中...</div>
          }
        >
          <BlogIndexClient pages={pages} />
        </Suspense>
      </DocsBody>
    </DocsPage>
  );
}

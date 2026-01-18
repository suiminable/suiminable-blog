import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
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
        <BlogIndexClient pages={pages} />
      </DocsBody>
    </DocsPage>
  );
}

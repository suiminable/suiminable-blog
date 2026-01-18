import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/date";
import { blogSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function BlogPostPage(
  props: PageProps<"/blog/[...slug]">,
) {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>
        {formatDate(page.data.date) ? (
          <>
            作成日 {formatDate(page.data.date)}
            <br />
          </>
        ) : null}
        {page.data.lastModified && formatDate(page.data.lastModified) ? (
          <>
            最終更新日 {formatDate(page.data.lastModified)}
            <br />
          </>
        ) : null}
      </DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(blogSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return blogSource.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/blog/[...slug]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

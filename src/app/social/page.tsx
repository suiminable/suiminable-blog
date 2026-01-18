import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { socialSource } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default function SocialPage() {
  const page = socialSource.getPages().find((item) => item.url === "/social");
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(socialSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateMetadata(): Metadata {
  const page = socialSource.getPages().find((item) => item.url === "/social");
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

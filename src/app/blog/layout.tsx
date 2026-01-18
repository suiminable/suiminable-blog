import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";
import { blogSource } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/blog">) {
  return (
    <>
      <HomeLayout {...baseOptions()}></HomeLayout>
      <DocsLayout
        tree={blogSource.getPageTree()}
        {...baseOptions()}
        sidebar={{ enabled: false }}
        nav={{ enabled: false }}
      >
        {children}
      </DocsLayout>
    </>
  );
}

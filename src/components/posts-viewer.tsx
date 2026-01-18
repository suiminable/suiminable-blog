import Link from "next/link";
import BlogLinkCard from "@/components/blog-link-card";
import type { BlogListItem } from "@/lib/blog";

type PostsViewerProps = {
  title: string;
  posts: BlogListItem[];
};

export default function PostsViewer({ title, posts }: PostsViewerProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Link href="/blog" className="text-sm font-medium underline">
          すべて見る
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="rounded-lg border border-neutral-200/40 p-4 text-sm text-neutral-500">
          記事はまだありません。
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => {
            return (
              <BlogLinkCard
                key={post.url}
                url={post.url}
                title={post.title}
                description={post.description}
                createdAt={post.date}
                updatedAt={post.lastModified ?? post.date}
                tags={post.tags}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

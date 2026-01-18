import PostsViewer from "@/components/posts-viewer";
import type { BlogListItem } from "@/lib/blog";
import { toTimestamp } from "@/lib/date";
import { blogSource } from "@/lib/source";

const getUpdatedAt = (post: BlogListItem) => post.lastModified ?? post.date;

export default function HomePage() {
  const recentPosts: BlogListItem[] = blogSource
    .getPages()
    .map(
      (page): BlogListItem => ({
        url: page.url,
        title: page.data.title,
        description: page.data.description,
        date: page.data.date,
        lastModified: page.data.lastModified,
        tags: page.data.tags,
      }),
    )
    .sort((first, second) => {
      return (
        toTimestamp(getUpdatedAt(second)) - toTimestamp(getUpdatedAt(first))
      );
    })
    .slice(0, 2);

  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-12 px-4">
      <PostsViewer title="最近更新した記事" posts={recentPosts} />
    </div>
  );
}

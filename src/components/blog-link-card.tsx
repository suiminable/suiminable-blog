import Link from "next/link";
import TagChip from "@/components/tag-chip";
import { formatDate } from "@/lib/date";
import { getTagLabel, type TagCode } from "@/lib/tags";

type BlogLinkCardProps = {
  url: string;
  title: string;
  description?: string;
  createdAt?: string | Date | null;
  updatedAt?: string | Date | null;
  tags?: TagCode[];
};

const toDateTime = (dateValue?: string | Date | null) => {
  if (!dateValue) return "";
  return dateValue instanceof Date ? dateValue.toISOString() : dateValue;
};

export default function BlogLinkCard({
  url,
  title,
  description,
  createdAt,
  updatedAt,
  tags,
}: BlogLinkCardProps) {
  const createdLabel = formatDate(createdAt);
  const updatedLabel = formatDate(updatedAt);

  return (
    <Link
      href={url}
      className="block rounded-lg border border-neutral-200/40 p-5 no-underline transition hover:border-neutral-300"
    >
      <article>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {createdLabel ? (
              <time
                dateTime={toDateTime(createdAt)}
                className="text-xs text-neutral-500"
              >
                作成日 {createdLabel}
              </time>
            ) : null}
            {updatedLabel ? (
              <time
                dateTime={toDateTime(updatedAt)}
                className="text-xs text-neutral-500"
              >
                更新日 {updatedLabel}
              </time>
            ) : null}
          </div>
          {tags && tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TagChip key={tag}>{getTagLabel(tag)}</TagChip>
              ))}
            </div>
          ) : null}
        </div>
        <h2 className="text-xl">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm text-neutral-500">{description}</p>
        ) : null}
      </article>
    </Link>
  );
}

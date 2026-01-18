"use client";

import { formatDate } from "@/lib/date";

interface DateItemProps {
  label: string;
  date?: string | Date | null;
}

function DateItem({ label, date }: DateItemProps) {
  const formattedDate = formatDate(date);

  if (!formattedDate) {
    return null;
  }

  return (
    <span className="flex gap-2">
      <span className="text-sm">{label}</span>
      <span className="text-sm">{formattedDate}</span>
    </span>
  );
}

interface BlogDateInfoProps {
  date?: string | Date | null;
  lastModified?: string | Date | null;
  showLastModified?: boolean;
}

export function BlogDateInfo({
  date,
  lastModified,
  showLastModified = true,
}: BlogDateInfoProps) {
  return (
    <span className="grid grid-cols-[auto_1fr] gap-4">
      <DateItem label="作成日" date={date} />
      {showLastModified && <DateItem label="最終更新日" date={lastModified} />}
    </span>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";

const baseClassName =
  "inline-flex items-center rounded-md border border-neutral-200/60 px-2.5 text-[11px] text-neutral-500 no-underline transition hover:border-neutral-300";

const activeClassName =
  "border-neutral-900 text-neutral-900 hover:border-neutral-900 dark:border-neutral-100 dark:text-neutral-100 dark:hover:border-neutral-100";

export type TagChipProps = {
  href?: string;
  children: ReactNode;
  isActive?: boolean;
  className?: string;
};

export default function TagChip({
  href,
  children,
  isActive = false,
  className,
}: TagChipProps) {
  const classNames = `${baseClassName} ${isActive ? activeClassName : ""} ${
    className ?? ""
  }`;

  if (!href) {
    return <span className={classNames}>{children}</span>;
  }

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
}

const defaultDateFormatter = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

type DateInput = string | Date | null | undefined;

export function toTimestamp(dateValue?: DateInput) {
  if (!dateValue) return 0;
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
  const timestamp = date.getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export function formatDate(
  dateValue?: DateInput,
  formatter: Intl.DateTimeFormat = defaultDateFormatter,
) {
  if (!dateValue) return null;
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
  if (Number.isNaN(date.getTime())) return null;
  return formatter.format(date);
}

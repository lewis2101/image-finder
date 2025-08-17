export function formatDate(date: Date): string {
  const d = date.getDate();
  const m = date.getMonth() + 1; // месяцы от 0
  const y = date.getFullYear();

  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");

  return `${d}.${m}.${y} в ${hh}:${mm}`;
}

export function formatDateLocale(date: Date | string): string {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(date));
}
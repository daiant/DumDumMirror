export function getTime(): Date {
  return new Date();
}
export function format(date: Date): string {
  return new Intl.DateTimeFormat('es', {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: '2-digit',
    minute: '2-digit',
    second: "2-digit"
  }).format(date);
}
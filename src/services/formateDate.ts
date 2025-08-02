
const date = new Date();

export function formatDate(): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
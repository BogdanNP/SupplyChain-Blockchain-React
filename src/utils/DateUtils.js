function toDateString(timestamp) {
  if (timestamp === undefined) {
    return "";
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  }).format(timestamp * 1000);
}

export { toDateString };

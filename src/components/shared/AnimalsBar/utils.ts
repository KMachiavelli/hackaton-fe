export function hoursBetween(date1: Date, date2: Date): number {
  // Convert both dates to milliseconds
  const d1 = date1.getTime();
  const d2 = date2.getTime();

  // Calculate the difference in milliseconds
  const diffMS = Math.abs(d1 - d2);

  // Convert milliseconds to hours
  const hours = diffMS / (1000 * 60 * 60);

  return Math.floor(hours);
}

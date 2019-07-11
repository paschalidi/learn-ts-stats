export const stringToDate = (string: string): Date => {
  const dateParts = string
    .split("/")
    .map((part: string): number => parseInt(part));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

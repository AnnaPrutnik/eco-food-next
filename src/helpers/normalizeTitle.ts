export const normalizeTitle = (title: string) => {
  return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
};

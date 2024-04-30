export const formatTitleToLowerCase = (title: string) => {
  const formattedTitle = title.replace(/\s+/g, "-").toLowerCase();
  return formattedTitle;
};

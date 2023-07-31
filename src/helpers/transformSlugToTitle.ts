export const transformSlugToTitle = (slug: string) => {
  return slug.split('-').join(' ');
};

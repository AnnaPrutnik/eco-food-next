import { Category } from '@/components';
import { getCategoryByUrl, getCategories } from '@/api';
import { notFound } from 'next/navigation';
import { transformSlugToTitle, normalizeTitle } from '@/helpers';

type ParamsType = { params: { categoryUrl: string } };

export async function generateMetadata({
  params,
}: {
  params: { categoryUrl: string };
}) {
  const slug = params.categoryUrl;

  return {
    title: normalizeTitle(transformSlugToTitle(slug)),
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    categoryUrl: category.url,
  }));
}

export default async function CategoryPage({
  params: { categoryUrl },
}: ParamsType) {
  const isCategoryExist = await getCategoryByUrl(categoryUrl);
  if (!isCategoryExist) {
    notFound();
  }
  return <Category categoryUrl={categoryUrl} />;
}

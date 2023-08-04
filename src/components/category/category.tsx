import s from './category.module.scss';
import { Breadcrumbs } from '@/components/common/breadcrumbs';
import { Filter } from './filter';
import { normalizeTitle, transformSlugToTitle } from '@/helpers';
import { getProductsByCategory } from '@/api';

export const Category = async ({ categoryUrl }: { categoryUrl: string }) => {
  const title = normalizeTitle(transformSlugToTitle(categoryUrl));

  const { filter, products } = await getProductsByCategory(categoryUrl);

  return (
    <div className={`container ${s.category}`}>
      <div className={s.empty}></div>
      <div className={s.head}>
        <Breadcrumbs />
        <h1 className={s.title}>{title}</h1>
      </div>
      <Filter filterData={filter} />
      <div className={s.catalogue}>Catalogue</div>
    </div>
  );
};

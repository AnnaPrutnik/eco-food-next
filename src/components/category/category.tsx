import s from './category.module.scss';
import { Breadcrumbs } from '@/components/common/breadcrumbs';
import { Filter } from './filter';
import { normalizeTitle, transformSlugToTitle } from '@/helpers';

export const Category = ({ categoryUrl }: { categoryUrl: string }) => {
  const title = normalizeTitle(transformSlugToTitle(categoryUrl));

  return (
    <div className={`container ${s.category}`}>
      <div className={s.empty}></div>
      <div className={s.head}>
        <Breadcrumbs />
        <h1 className={s.title}>{title}</h1>
      </div>
      <div className={s.filter}>
        <Filter />
      </div>

      <div className={s.catalogue}>Catalogue</div>
    </div>
  );
};

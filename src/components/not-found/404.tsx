import s from './404.module.scss';
import Image from 'next/image';
import notFoundPicture from '../../../public/404.png';
import { Buttons } from './buttons';

export const NotFound = () => {
  return (
    <section className={s.notFound}>
      <h2 className={s.title}>Oops, this page couldn’t be found</h2>
      <div className={s.image}>
        <Image
          src={notFoundPicture}
          alt="not found picture"
          fill
          sizes="70vw (min-width: 768px) 65vw"
        />
      </div>
      <Buttons />
    </section>
  );
};

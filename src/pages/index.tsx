import Head from 'next/head';
import { CategoryBtn, CartBtn } from 'components';

export default function Home() {
  const onClick = () => {
    console.log('Click');
  };
  return (
    <section style={{ padding: '12px', display: 'flex', gap: '16px' }}>
      <CategoryBtn />
      <CartBtn onClick={onClick} total={5} />
    </section>
  );
}

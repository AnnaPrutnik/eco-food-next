import '@/styles/global.scss';
import { gilroy, lato, rubik } from '@/fonts/index';
import { Header, Footer } from '@/components';

export const metadata = {
  title: 'Eco Food',
  description: 'Health in Every Kernel: From Nature to Your Table!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} ${lato.variable} ${rubik.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Rubik } from 'next/font/google';
import localFont from 'next/font/local';

export const rubik = Rubik({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const lato = localFont({
  src: [
    {
      path: './Lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Lato/Lato-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Lato/Lato-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-lato',
});

export const gilroy = localFont({
  src: [
    {
      path: './Gilroy/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Gilroy/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Gilroy/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Gilroy/Gilroy-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
});

import s from './footer.module.scss';
import Link from 'next/link';
import { Logo } from '@/components';
import { Subscription } from './subscription';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.subscription}>
        <Subscription />
        <p className={s.links}>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Privacy Policy</Link>
        </p>
      </div>
      <div className={s.nav}>
        <div className={s.submenu}>
          <h3 className={s.subtitle}>Company</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                About
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Store
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.line}></div>
        <div className={s.submenu}>
          <h3 className={s.subtitle}>Service</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Delivery
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Payment
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.line}></div>
        <div className={s.submenu}>
          <h3 className={s.subtitle}>Follow us</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Instagram
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Facebook
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link}>
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.line}></div>
      </div>
      <div className={s.about}>
        <Link href="/">
          <Logo />
        </Link>
        <p className={s.name}>Eco Food Market SPROUT Goods Ltd.</p>
        <p className={s.links}>
          <Link href="/">Terms & Conditions</Link>
          <Link href="/">Privacy Policy</Link>
        </p>
        <p className={s.copyrights}>2021 © All rights reserved</p>
      </div>
    </footer>
  );
};

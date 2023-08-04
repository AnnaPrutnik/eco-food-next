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
          <Link href="/" prefetch={false}>
            Terms & Conditions
          </Link>
          <Link href="/" prefetch={false}>
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className={s.nav}>
        <div className={s.submenu}>
          <h3 className={s.subtitle}>Company</h3>
          <ul className={s.list}>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
                About
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
                Store
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
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
              <Link href="/" className={s.link} prefetch={false}>
                Delivery
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
                Payment
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
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
              <Link href="/" className={s.link} prefetch={false}>
                Instagram
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
                Facebook
              </Link>
            </li>
            <li className={s.item}>
              <Link href="/" className={s.link} prefetch={false}>
                Twitter
              </Link>
            </li>
          </ul>
        </div>
        <div className={s.line}></div>
      </div>
      <div className={s.about}>
        <Link href="/" prefetch={false}>
          <Logo />
        </Link>
        <p className={s.name}>Eco Food Market SPROUT Goods Ltd.</p>
        <p className={s.links}>
          <Link href="/" prefetch={false}>
            Terms & Conditions
          </Link>
          <Link href="/" prefetch={false}>
            Privacy Policy
          </Link>
        </p>
        <p className={s.copyrights}>2021 © All rights reserved</p>
      </div>
    </footer>
  );
};

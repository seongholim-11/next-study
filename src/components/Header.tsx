// src/components/Header.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      My Awesome Blog
      <nav className={styles.nav}>
        <Link
          className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
          href="/"
        >
          HOME
        </Link>
        <Link
          className={`${styles.link} ${pathname.includes('/blog') ? styles.active : ''}`}
          href="/blog"
        >
          BLOG
        </Link>
      </nav>
    </header>
  );
}

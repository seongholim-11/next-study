'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './Header.module.css';


export default function Header() {
    const pathname = usePathname();

    return (
        <header className={styles.header}>
            My Awesome Website
            <nav className={styles.nav}>
                <Link className={styles.link} href={'/'}>HOME</Link>
                <Link className={styles.link}  href={'/blog'}>BLOG</Link>
            </nav>
        </header>
    );
}

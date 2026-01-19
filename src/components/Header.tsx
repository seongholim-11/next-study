'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const pathname = usePathname();

    return (
        <header>
            My Awesome Website
            <nav>
                <Link className={`nav-link ${pathname === '/' && 'active'}`} href={'/'}>HOME</Link>
                <Link className={`nav-link ${pathname === '/about' && 'active'}`}  href={'/about'}>ABOUT</Link>
            </nav>
        </header>
    );
}

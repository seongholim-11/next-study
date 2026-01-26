import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MyDevBlog
        </Link>
        <nav className={styles.nav}>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/blog/new" className={styles.createPostButton}>
            Create Post
          </Link>
        </nav>
      </div>
    </header>
  );
}

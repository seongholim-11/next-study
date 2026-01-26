import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/posts';
import styles from './BlogPostCard.module.css';

interface BlogPostCardProps {
  post: Post;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.likes}>❤️ {post.likes}</p>
      </div>
    </Link>
  );
}

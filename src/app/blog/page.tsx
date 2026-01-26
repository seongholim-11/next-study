import { getPosts } from '@/lib/posts';
import BlogPostCard from '@/components/BlogPostCard';
import styles from './Blog.module.css';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

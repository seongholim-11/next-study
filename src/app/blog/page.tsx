// src/app/blog/page.tsx
import Link from 'next/link';
// 데이터 로직과 타입을 직접 가져옵니다.
import { getPosts, type Post } from '@/lib/posts';

export default async function BlogPage() {
  // 더 이상 fetch를 사용하지 않고, 서버-사이드 함수를 직접 호출합니다.
  const posts: Post[] = await getPosts();

  return (
    <div>
      <h1 style={{fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '2rem'}}>Blog</h1>
      <ul style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link 
              href={`/blog/${post.slug}`}
              style={{fontSize: '1.25rem', textDecoration: 'underline'}}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

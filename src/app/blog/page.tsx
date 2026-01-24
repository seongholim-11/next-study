
import Link from 'next/link';
import Image from 'next/image'; // Image 컴포넌트를 가져옵니다.
import { getPosts, type Post } from '@/lib/posts';

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '3rem',
        textAlign: 'center',
        color: '#222'
      }}>
        Blog & Articles
      </h1>

      {/* 게시물 카드를 위한 그리드 컨테이너 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2.5rem'
      }}>
        {posts.map((post) => (
          // Link 컴포넌트가 카드 전체를 감싸서 클릭 가능하게 만듭니다.
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              color: 'inherit',
              backgroundColor: '#fff',
              borderRadius: '12px',
              overflow: 'hidden', // Image 컴포넌트의 모서리도 둥글게 처리
              boxShadow: '0 8px 16px rgba(0,0,0,0.07)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            // 인라인 스타일로는 hover 효과를 직접 줄 수 없지만,
            // CSS 파일이나 styled-components를 사용하면 가능합니다.
            // onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'; }}
            // onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.07)'; }}
          >
            {/* 이미지 컨테이너 */}
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', // 16:9 비율의 높이를 만듭니다.
            }}>
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }} // 이미지가 컨테이너를 꽉 채우도록 설정
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // 뷰포트에 따른 이미지 크기 최적화
              />
            </div>

            {/* 텍스트 컨테이너 */}
            <div style={{ padding: '1.5rem' }}>
              <h2 style={{
                fontSize: '1.4rem',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                {post.title}
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                lineHeight: '1.6'
              }}>
                {/* 100자로 내용 요약 후 '...' 추가 */}
                {post.content.substring(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

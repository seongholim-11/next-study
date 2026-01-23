import { getPostBySlug } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: {
        slug: string;
    }
}

// generateMetadata 함수는 params를 받아 동적으로 메타데이터를 생성합니다.
export async function generateMetadata(
    { params }: BlogPostPageProps
): Promise<Metadata> {
    // params는 Promise가 아니므로 await를 사용하지 않습니다.
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    // 게시물이 없는 경우를 위한 기본 메타데이터
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    // 게시물 제목을 동적으로 반환
    return {
        title: post.title,
        // 나중에 description 등 다른 메타데이터도 추가할 수 있습니다.
        // description: post.content.substring(0, 150) + '...',
    };
}

// --- 페이지 컴포넌트는 이전과 동일합니다 ---

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                {post.title}
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
                {post.content}
            </p>
        </article>
    )
}

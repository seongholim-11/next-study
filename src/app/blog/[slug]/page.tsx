import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation'

// params 객체의 올바른 타입을 정의합니다.
interface BlogPostPageProps {
    params: {
        slug: string;
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    // params.slug를 직접 사용하여 게시물을 가져옵니다.
    const post = await getPostBySlug(slug);

    // 게시물이 없는 경우 notFound()를 호출하는 예외 처리 로직입니다.
    if (!post) {
        notFound();
    }

    // 가져온 데이터를 사용하여 페이지를 렌더링합니다.
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}

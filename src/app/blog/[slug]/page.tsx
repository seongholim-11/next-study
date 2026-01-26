import { getPostBySlug } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import LikeButton from './LikeButton';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// generateMetadata handles params as a Promise
export async function generateMetadata(
    { params }: BlogPostPageProps
): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
    };
}

// Retyped name to clear hidden characters and awaited params
export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params; // Must await params in Next.js 15+
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <div style={{ position: 'relative', width: '100%', height: '400px', marginBottom: '2rem' }}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                {post.title}
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.75' }}>
                {post.content}
            </p>
            <LikeButton slug={slug} likes={post.likes} />
        </article>
    );
}
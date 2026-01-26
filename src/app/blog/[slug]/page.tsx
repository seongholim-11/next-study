import { getPostBySlug } from '@/lib/posts';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import LikeButton from './LikeButton';
import styles from './BlogPost.module.css';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata(
    { params }: BlogPostPageProps
): Promise<Metadata> {
    const { slug } = await params
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className={styles.image}
                    priority
                />
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.content}>{post.content}</p>
            <div className={styles.likeContainer}>
                <LikeButton slug={post.slug} likes={post.likes} />
            </div>
        </article>
    );
}

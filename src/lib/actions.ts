'use server';

import { revalidatePath } from 'next/cache';
import { posts } from '@/lib/posts';

export async function addLike(slug: string) {
    const post = posts.find((post) => post.slug === slug);
    if (post) {
        post.likes++;
        revalidatePath(`/blog/${slug}`)
        revalidatePath('/blog')
    }

    console.log(`Liked post: ${slug}`);
}
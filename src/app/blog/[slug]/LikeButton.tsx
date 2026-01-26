'use client';

import { useOptimistic } from 'react';
import { addLike } from "@/lib/actions";

export default function LikeButton({ slug, likes }: { slug: string, likes: number }) {
    const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state) => state + 1);

    console.log("slug", slug)
    return (
        <form action={() => {
            addOptimisticLike(null)
            addLike(slug)
            }}>
            <button type='submit'>❤️({optimisticLikes})</button>
        </form>
    )
}
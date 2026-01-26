'use client';

import { useOptimistic } from 'react';
import { addLike } from "@/lib/actions";
import styles from './LikeButton.module.css';

export default function LikeButton({ slug, likes }: { slug: string, likes: number }) {
    const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (state) => state + 1);

    const handleLike = async () => {
        addOptimisticLike(null);
        await addLike(slug);
    };

    return (
        <form action={handleLike}>
            <button type='submit' className={styles.likeButton}>
                <span className={styles.heart}>❤️</span>
                <span className={styles.count}>{optimisticLikes}</span>
            </button>
        </form>
    )
}

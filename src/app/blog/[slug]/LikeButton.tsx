'use client';

import { addLike } from "@/lib/actions";

export default function LikeButton({ slug }: { slug: string }) {
    return (
        <button onClick={() => addLike(slug)}>Like</button>
    )
}
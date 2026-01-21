
interface Props {
    params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
    return (
        <div>
            <h1>Blog Post</h1>
            <p>이 포스트의 slug는: {params.slug}</p>
        </div>
    )
}
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li>
          <Link href="/blog/getting-started-with-nextjs">
            Getting Started with Next.js
          </Link>
        </li>
        <li>
          <Link href="/blog/typescript-is-awesome">
            TypeScript is Awesome
          </Link>
        </li>
      </ul>
    </div>
  );
}

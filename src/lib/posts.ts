// src/lib/posts.ts

// 게시물 데이터의 타입을 정의합니다.
export type Post = {
  slug: string;
  title: string;
  content: string;
  image: string;
  likes: number;
};

// 데이터를 상수로 분리하여 중복을 제거합니다.
export let posts: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    content: 'This is a post about getting started with Next.js. It is a popular React framework for building fast and modern web applications.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    likes: 10
  },
  {
    slug: 'typescript-is-awesome',
    title: 'TypeScript is Awesome',
    content: 'TypeScript adds static types to JavaScript, which can help you catch errors early and write more maintainable code.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    likes: 5
  },
  {
    slug: 'css-modules-are-cool',
    title: 'CSS Modules are Cool',
    content: 'CSS Modules allow you to write CSS that is scoped to a specific component, which can help you avoid a lot of styling conflicts.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    likes: 8
  }
];

// 모든 게시물 목록을 반환하는 함수
export async function getPosts(): Promise<Post[]> {
  return posts;
}

// slug를 기반으로 단일 게시물을 찾는 함수
// 반환 타입을 Post | undefined로 명확하게 하여, 찾지 못했을 경우를 타입으로 표현합니다.
export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  // 더 이상 불안전한 형 변환을 사용하지 않습니다.
  return posts.find((post) => post.slug === slug);
}

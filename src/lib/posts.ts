// src/lib/posts.ts

// 게시물 데이터의 타입을 정의합니다.
export type Post = {
  slug: string;
  title: string;
};

// 실제 애플리케이션에서는 이 함수가 데이터베이스나 외부 CMS와 통신할 수 있습니다.
export async function getPosts(): Promise<Post[]> {
  // 가짜 데이터를 비동기적으로 반환하는 것을 시뮬레이션합니다.
  return [
    {
      slug: 'getting-started-with-nextjs',
      title: 'Getting Started with Next.js',
    },
    {
      slug: 'typescript-is-awesome',
      title: 'TypeScript is Awesome',
    },
    {
        slug: 'css-modules-are-cool',
        title: 'CSS Modules are Cool',
    }
  ];
}

// src/app/api/posts/route.ts
import { NextResponse } from 'next/server';
import { getPosts } from '@/lib/posts'; // @ is a webpack alias to the src directory, this is equivalent to ../../lib/posts

export async function GET() {
  // 이제 데이터 로직을 직접 호출합니다.
  const posts = await getPosts();
  return NextResponse.json(posts);
}

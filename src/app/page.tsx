import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>홈 페이지</h1>
      <Link href={'/about'} >about 페이지로 이동</Link>
    </main>
  );
}

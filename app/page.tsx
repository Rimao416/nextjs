import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/dashboard#yellow">Dashboard Yello part</Link>
      <Link href="/dashboard#green">Dashboard Green part</Link>
      <Link href="/dashboard#red">Dashboard Red part</Link>
    </div>
  );
}

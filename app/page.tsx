"use client";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"))
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

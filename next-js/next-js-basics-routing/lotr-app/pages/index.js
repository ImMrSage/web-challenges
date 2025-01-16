import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href={"/volumes"}>The Lord of The Rings Volumes</Link>
    </div>
  );
}

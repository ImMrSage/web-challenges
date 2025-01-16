import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const index = volumes.findIndex((volume) => volume.slug === "the-two-towers");
  const volume = volumes[index];
  const prevPage = volumes[index - 1];
  const nextPage = volumes[index + 1];

  const { title, description, books, cover } = volume;

  return (
    <>
      <Link href={"/volumes"}>Back to all volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: {title}
          </li>
        ))}
      </ul>
      <Image src={cover} width={140} height={230} />
      <br />
      <Link href={`/volumes/${index > 0 ? prevPage.slug : volume.slug}`}>
        Previous Volume
      </Link>
      <br />
      <Link
        href={`/volumes/${
          index < volumes.length - 1 ? nextPage.slug : volume.slug
        }`}
      >
        Next Volume
      </Link>
    </>
  );
}

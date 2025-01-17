import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();
  function handleRandomRedirect() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolume = volumes[randomIndex];
    router.push(`/volumes/${randomVolume.slug}`);
  }
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleRandomRedirect}>
        Random Volume
      </button>
    </>
  );
}

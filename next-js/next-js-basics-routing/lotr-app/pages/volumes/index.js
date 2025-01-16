import { volumes, introduction } from "@/lib/data";
import Link from "next/link";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>Volumes:</h2>
      <ul></ul>
    </>
  );
}

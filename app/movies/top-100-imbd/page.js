import Link from "next/link";


export default function page() {
  return (
    <>
      <h1>This top 100 imbd movies</h1>
      <div>
        <Link href="/movies/top-100-imbd/inception">Inception</Link>
      </div>
      <div>
        <Link href="/movies/top-100-imbd/interstellar">Interstellar</Link>
      </div>
      <div>
        <Link href="/movies/top-100-imbd/once">Once upon a time in america</Link>
      </div>
      <div>
        <Link href="/movies/top-100-imbd/godfather">Godfather</Link>
      </div>
      <div>
        <Link href="/movies/top-100-imbd/scarface">Scarface</Link>
      </div>
      <div>
        <Link href="/movies/top-100-imbd/taxi-driver">Taxi driver</Link>
      </div>
    </>
  );
}

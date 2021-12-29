import Link from "next/link";

// domain.com

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-great">NextJS is great</Link>
        </li>
        <li>
          <Link href="">React</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;

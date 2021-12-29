import { useRouter } from "next/router";

// domain.com/news/something-important

function DetailPage() {
  const router = useRouter();
  return <h1>Detail Page</h1>;
}

export default DetailPage;

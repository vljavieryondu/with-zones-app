import Link from "next/link";

type Params = Promise<{ rcdId: string }>

export default function Post(props: {params: Params}) {
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}

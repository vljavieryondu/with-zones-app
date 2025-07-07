import Link from "next/link";

type Params = Promise<{ id: string }>

export default async function Post(props: {params: Params}) {
  const params = await props.params;
  const id = params.id;

  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}

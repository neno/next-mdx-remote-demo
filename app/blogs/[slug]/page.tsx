import { getBlogBySlug, getAllBlogSlug } from '../fetchers';

export async function generateStaticParams() {
  return getAllBlogSlug();
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);
  console.log(params);

  return (
    <main className='prose'>
      <h1>{blog.frontmatter.title}</h1>
      <article>{blog.content}</article>
      {blog.frontmatter.tags &&
        blog.frontmatter.tags.map((tag) => <li key={tag}>{tag}</li>)}
    </main>
  );
}

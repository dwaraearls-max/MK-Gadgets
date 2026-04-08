import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export function BlogTeaser() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="scroll-mt-28 border-t border-charcoal/10 bg-background py-16 md:py-24"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2
          id="blog-heading"
          className="text-3xl font-bold tracking-tight text-matte md:text-4xl"
        >
          Tech tips & guides
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          SEO-friendly articles on smartphones, accessories, and spotting fakes
          — written for buyers in Ghana.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-surface shadow-md transition hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-charcoal/5">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="33vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <time
                  dateTime={post.date}
                  className="text-xs font-medium uppercase tracking-wide text-muted"
                >
                  {post.date}
                </time>
                <h3 className="mt-2 text-lg font-semibold text-matte">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-matte underline-offset-4 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

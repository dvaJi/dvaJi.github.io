import fs from "fs";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import Tag from "components/Tag";
import { BlogSeo } from "components/SEO";
import markdownToHtml from "lib/markdownToHtml";
import { getContents } from "lib/mdApi";

import siteMetadata from "../../data/siteMetadata.json";
import generateRss from "lib/generate-rss";

type Props = {
  post: any;
  next?: any;
  prev?: any;
};

const Home: NextPage<Props> = ({ post, next, prev }) => {
  const { date, title, content, tags } = post;
  return (
    <div>
      <BlogSeo url={`${siteMetadata.siteUrl}/blog/${post.slug}`} {...post} />
      <div>
        <article>
          <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
            <header className="pt-6 xl:pb-6">
              <div className="space-y-1 text-center">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div>
                  <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                    {title}
                  </h1>
                </div>
              </div>
            </header>
            <div
              className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6"
              style={{ gridTemplateRows: "auto 1fr" }}
            >
              <dl className="pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700">
                <dt className="sr-only">Authors</dt>
                <dd>
                  <ul className="flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8">
                    <li className="flex items-center space-x-2">
                      <img
                        src={siteMetadata.image}
                        alt="avatar"
                        className="w-10 h-10 rounded-full"
                      />
                      <dl className="text-sm font-medium leading-5 whitespace-nowrap">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">
                          {siteMetadata.author}
                        </dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          <Link href={siteMetadata.twitter}>
                            <a className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                              {siteMetadata.twitter.replace(
                                "https://twitter.com/",
                                "@"
                              )}
                            </a>
                          </Link>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                </dd>
              </dl>
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
                <div
                  className="pt-10 pb-8 prose dark:prose-dark max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              </div>
              <footer>
                <div className="text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2">
                  {tags && (
                    <div className="py-4 xl:py-8">
                      <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                        Tags
                      </h2>
                      <div className="flex flex-wrap">
                        {tags.map((tag: string) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  )}
                  {(next || prev) && (
                    <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                      {prev && (
                        <div>
                          <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                            Previous Article
                          </h2>
                          <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                            <Link href={`/blog/${prev.slug}`}>
                              {prev.title}
                            </Link>
                          </div>
                        </div>
                      )}
                      {next && (
                        <div>
                          <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                            Next Article
                          </h2>
                          <div className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                            <Link href={`/blog/${next.slug}`}>
                              {next.title}
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="pt-4 xl:pt-8">
                  <Link href="/blog">
                    <a className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                      &larr; Back to the blog
                    </a>
                  </Link>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = getContents();
  const postIndex = allPosts.findIndex((post) => post.slug === params!.slug);
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = allPosts[postIndex];

  // rss
  const rss = generateRss(allPosts);
  fs.writeFileSync("./public/index.xml", rss);

  return {
    props: {
      post: {
        ...post,
        content: await markdownToHtml(post.content || ""),
      },
      next,
      prev,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getContents();
  const paths: { params: { slug: string } }[] = [];

  posts.forEach((post) => {
    paths.push({ params: { slug: post.slug } });
  });

  return {
    paths,
    fallback: false,
  };
};

export default Home;

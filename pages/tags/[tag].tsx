import fs from "fs";
import path from "path";
import { GetStaticProps, NextPage } from "next";

import { PageSeo } from "components/SEO";
import PostsList from "components/PostsList";

import { BlogPost, getContents } from "lib/mdApi";
import generateRss from "lib/generate-rss";
import { getAllTags } from "lib/tags";
import { kebabCase } from "lib/utils/kebabcase";

import siteMetadata from "../../data/siteMetadata.json";

const root = process.cwd();

type TagProps = {
  posts: BlogPost[];
  tag: string;
};

const Tag: NextPage<TagProps> = ({ posts, tag }) => {
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <>
      <PageSeo
        title={`${tag} - ${siteMetadata.title}`}
        description={`${tag} tags - ${siteMetadata.title}`}
        url={`${siteMetadata.siteUrl}/tags/${tag}`}
      />
      <PostsList posts={posts} title={title} />
    </>
  );
};

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allPosts = getContents();
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t) => kebabCase(t)).includes(params!.tag as string)
  );

  // rss
  const rss = generateRss(filteredPosts, `tags/${params!.tag}/index.xml`);
  const rssPath = path.join(root, "public", "tags", params!.tag as string);
  fs.mkdirSync(rssPath, { recursive: true });
  fs.writeFileSync(path.join(rssPath, "index.xml"), rss);

  return { props: { posts: filteredPosts, tag: params!.tag } };
};

export default Tag;

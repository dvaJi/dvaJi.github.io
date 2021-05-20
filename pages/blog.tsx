import { GetStaticProps, NextPage } from "next";

import PostsList from "components/PostsList";
import { PageSeo } from "components/SEO";
import { getContents } from "lib/mdApi";

import siteMetadata from "../data/siteMetadata.json";

type BlogProps = {
  posts: any[];
};

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <PostsList posts={posts} title="All Posts" />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getContents();

  return { props: { posts } };
};

export default Blog;

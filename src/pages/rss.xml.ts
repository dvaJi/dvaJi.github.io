import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site || "",
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
};

import remark from "remark";
import html from "remark-html";
const prism = require("remark-prism");

export default async function markdownToHtml(markdown: any): Promise<string> {
  const result = await remark().use(html).use(prism).process(markdown);
  return result.toString();
}

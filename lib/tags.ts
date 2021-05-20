import { getContents } from "./mdApi";
import { kebabCase } from "./utils/kebabcase";

export async function getAllTags() {
  const files = getContents();

  let tagCount: { [props: string]: number } = {};
  files.forEach((data) => {
    if (data.tags) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });

  return tagCount;
}

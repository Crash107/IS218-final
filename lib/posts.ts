// posts.ts

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface CardData {
  title: string;
  date: string;
  img: string;
}

export interface PostData {
  id: string;
  cards: CardData[];
  // Include other properties as needed
  [key: string]: any;
}

export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id, // Include the id property
      cards: matterResult.data.cards || [], // Extract cards from front matter
      ...matterResult.data,
    } as PostData;
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

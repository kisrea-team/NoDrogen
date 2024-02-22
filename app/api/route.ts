/*
 * @Author: zitons
 * @Date: 2024-02-22 14:00:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 14:57:13
 * @Description: 简介
 */
import { getAllPosts } from "../../lib/notion/getData";
import { setDataToCache, getDataFromCache } from "../../lib/cache";

export async function GET() {
    let posts;
    if ((await getDataFromCache("posts")) == null) {
      posts = await getAllPosts(0, 0, 0);
      await setDataToCache("posts", posts);
      console.log("N");
    } else {
      posts = await getDataFromCache("posts");
      console.log("Y");
    }
   
    return Response.json({ posts })
  }
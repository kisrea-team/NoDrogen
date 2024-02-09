/* _  __  _
 *| |/ / (_)  ___   _ __    ___    __ _
 *| ' /  | | / __| | '__|  / _ \  / _` |
 *| . \  | | \__ \ | |    |  __/ | (_| |
 *|_|\_\ |_| |___/ |_|     \___|  \__,_|
 */
import { Suspense } from "react";
import { setDataToCache, getDataFromCache } from "../../lib/cache";
import { getAllPosts } from "../../lib/notion/getData";
import "../globals.css";
import { lazy } from "react";

import Head from "../../components/Head";
// import Main from "../../components/Main";
//import List from '../components/List'
import { Loading } from "../../components/Loading";

export async function generateStaticParams() {
  let posts;
  posts = await getAllPosts(0, 0, 0);
  posts = posts.slice(1);
  posts = posts.filter((post) => {
    return post?.type?.[0] != "精选";
  });
  const pagesCount = Math.ceil(posts.length / 10); // 100/10
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return pages.map((post) => ({
    slug: String(post),
  }));
}
export default async function Page({ params }) {
  const { slug } = params;
  const List = lazy(() => import("../../components/List"));
  return (
    <main className="container mx-auto">
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Head />
        {/* <Main/> */}
        <List currentPage={slug || 1} />
        <p>第{slug || 1}页</p>
      </Suspense>
    </main>
  );
}

export async function generateMetadata() {
  let posts, icon;
  if ((await getDataFromCache("posts")) != null) {
    posts = await getDataFromCache("posts");
  } else {
    posts = await getAllPosts(0, 0, 0);
    await setDataToCache("posts", posts);
  }
  if (posts[0]["icon"].startsWith("http") <= 0) {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      posts[0]["icon"] +
      "</text></svg>";
  }
  return {
    title: posts[0]["name"],
    icons: icon,
    description: posts[0]["description"],
  };
}

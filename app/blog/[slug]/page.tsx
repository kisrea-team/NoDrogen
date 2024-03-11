/*
 * @Author: zitons
 * @Date: 2024-02-05 16:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-11 17:25:05
 * @Description: 简介
 */
//import * as React from 'react'
import { NotionPage } from "../../../components/NotionPage";
import { getData } from "../../../components/base/Node";
// import "../../../components/styles.module.css"

export async function generateStaticParams() {
  const d = await getData("api");
  return d.pageId;
}
export default async function Page({ params }) {
  const { slug } = params;
  const d = await getData("api/blog/" + slug);
  // console.log(recordMap)
  // console.log(tags)
  if (!d.data.title) {
    return;
  }
  return (
    <main>
      <NotionPage
        recordMap={d.recordMap}
        name={d.wiki.mainUser}
        title={d.data.title}
        type={d.wiki.type}
        mainTitle={d.wiki.title}
        data={d.data}
      />
    </main>
  );
}
export async function generateMetadata({ params }) {
  const { slug } = params;
  const d = await getData("api/blog/" + slug);
  let icon;
  if (d.data["icon"]) {
    if (d.data["icon"].startsWith("http") <= 0) {
      icon =
        "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
        d.data["icon"] +
        "</text></svg>";
    }
  } else {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      "🛩️" +
      "</text></svg>";
  }
  return {
    title: d.data["title"],
    icons: icon,
    description: String(d.data["description"]),
  };
}

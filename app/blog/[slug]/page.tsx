/*
 * @Author: zitons
 * @Date: 2024-02-05 16:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 21:14:27
 * @Description: 简介
 */
//import * as React from 'react'
import { NotionPage } from "../../../components/NotionPage";
import { idToUuid, getBlockIcon } from "notion-utils";
import { NotionAPI } from "notion-client";
import { getMainUser, pagesStaticParam } from "../../../lib/notion/getData";
// import getAllPageIds from "../../../lib/notion/getAllPageIds";
// import * as notion from '../../../lib/notion'
// import postcss from 'postcss';
import { getPageTitle, getPageProperty } from "notion-utils";
import { getData } from "../../../components/base/Node";
// import getPageProperties from "../../../lib/notion/getPageProperties";
// import dayjs from "dayjs";
// async function getData(slug) {
//   const res = await fetch(process.env.NEXT_PUBLIC_BLOG+"api/blog/"+slug)
  
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }
export async function generateStaticParams() {
  return pagesStaticParam()
}
export default async function Page({ params }) {
  const { slug } = params;
  const d = await getData("api/blog/"+slug)
  // console.log(recordMap)
  // console.log(tags)
  if (!d.data.title) {
    return;
  }
  return (
    <>
      <main>
        <NotionPage
          recordMap={d.data.recordMap}
          name={d.data.mainUser}
          title={d.data.title}
          mainTitle={d.data.mainTitle}
          data={d.data}
        />
      </main>
    </>
  );
}
export async function generateMetadata({ params }) {
  const { slug } = params;
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(slug);
  const title = getPageTitle(recordMap);
  if (!title) {
    return;
  }
  const description = getPageProperty(
    "summary",
    recordMap["block"][slug]["value"],
    recordMap
  );
  const block = recordMap.block;
  const rawMetadata = block[slug].value;

  // const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");
  let icon = getBlockIcon(rawMetadata, recordMap);
  if (icon) {
    if (icon.startsWith("http") <= 0) {
      icon =
        "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
        icon +
        "</text></svg>";
    }
  } else {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      "🛩️" +
      "</text></svg>";
  }
  return {
    title: title,
    icons: icon,
    description: String(description),
  };
}

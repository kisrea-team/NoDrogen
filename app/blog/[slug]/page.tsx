/*
 * @Author: zitons
 * @Date: 2024-02-05 16:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-08 12:33:19
 * @Description: 简介
 */
//import * as React from 'react'
import { NotionPage } from "../../../components/NotionPage";
import { idToUuid, getBlockIcon } from "notion-utils";
import { NotionAPI } from "notion-client";
import getAllPageIds from "../../../lib/notion/getAllPageIds";
// import * as notion from '../../../lib/notion'
// import { getAllPosts } from '../../lib/notion/getData'
// import postcss from 'postcss';
import { getPageTitle, getPageProperty } from "notion-utils";
// import { Footer } from '../../../components/Footer'
// import dynamic from 'next/dynamic'
// import { Twikoo } from '../../../components/Twikoo'
export async function generateStaticParams() {
  const { NOTION_ACCESS_TOKEN } = process.env;
  const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
  const id = idToUuid(process.env.PAGE_ID);
  //视图号
  const response = await client.getPage(id);
  const collectionQuery = response.collection_query;
  const pageIds = getAllPageIds(collectionQuery);
  console.log(pageIds);
  return pageIds.map((post) => ({
    slug: post,
  }));
}
export default async function Page({ params }) {
  const { slug } = params;
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(slug);
  const block = recordMap.block;
  const rawMetadata = block[slug].value;
  const title = getPageTitle(recordMap);
  if (!title) {
    return;
  }
  return (
    <>
      <main>
        <NotionPage recordMap={recordMap} />
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
  if (icon.startsWith("http") <= 0) {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      icon +
      "</text></svg>";
  }
  return {
    title: title,
    icons: icon,
    description: String(description),
  };
}

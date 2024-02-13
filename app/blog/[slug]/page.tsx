/*
 * @Author: zitons
 * @Date: 2024-02-05 16:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-11 17:16:10
 * @Description: 简介
 */
//import * as React from 'react'
import { NotionPage } from "../../../components/NotionPage";
import { idToUuid, getBlockIcon } from "notion-utils";
import { NotionAPI } from "notion-client";
import { getMainUser } from "../../../lib/notion/getData";
import getAllPageIds from "../../../lib/notion/getAllPageIds";
// import * as notion from '../../../lib/notion'
// import postcss from 'postcss';
import { getPageTitle, getPageProperty } from "notion-utils";
import getPageProperties from "../../../lib/notion/getPageProperties";
export async function generateStaticParams() {
  const { NOTION_ACCESS_TOKEN } = process.env;
  const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
  const id = idToUuid(process.env.PAGE_ID);
  //视图号
  const response = await client.getPage(id);
  const collectionQuery = response.collection_query;
  const pageIds = getAllPageIds(collectionQuery);
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

  const collection = Object.values(recordMap.collection)[0]?.["value"];
  const schema = collection?.schema;
  const tags = await getPageProperties(slug, block, schema)
  // const tags = await getPageProperty(
  //   "tags",
  //   recordMap["block"][slug]["value"],
  //   recordMap
  // )
  const title = getPageTitle(recordMap);
  // console.log(recordMap)
  // console.log(tags)
  if (!title) {
    return;
  }
  return (
    <>
      <main>
        <NotionPage recordMap={recordMap} name={await getMainUser()} title={title} tags={tags}/>
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

/*
 * @Author: zitons
 * @Date: 2024-02-05 16:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-20 10:43:31
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
import dayjs from "dayjs";

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
  let data = await getPageProperties(slug, block, schema);
  // const tags = await getPageProperty(
  //   "tags",
  //   recordMap["block"][slug]["value"],
  //   recordMap
  // )
  
  const tagSchema = Object.values(schema);
  const tagOptions = tagSchema?.[3]?.["options"];
  data["tags"] =
    data?.["tags"]?.map((tag) => {
      return {
        name: tag,
        color: tagOptions?.find((t) => t.value === tag)?.color || "gray",
      };
    }) || [];
  data["date"] = data["date"]?.start_date
    ? data["date"]?.start_date
    : dayjs(block[slug].value?.created_time).format("YYYY年MM月DD日").valueOf();
  const title = getPageTitle(recordMap);
  // console.log(recordMap)
  // console.log(tags)
  if (!title) {
    return;
  }
  return (
    <>
      <main>
        <NotionPage
          recordMap={recordMap}
          name={await getMainUser()}
          title={title}
          mainTitle={collection["name"][0][0]}
          data={data}
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

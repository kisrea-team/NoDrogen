/*
 * @Author: zitons
 * @Date: 2024-02-22 16:04:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 21:08:47
 * @Description: 页面详细报告
 */

import { NotionAPI } from "notion-client";
import getPageProperties from "../../../../lib/notion/getPageProperties";
import { setDataToCache, getDataFromCache } from "../../../../lib/cache";
import dayjs from "dayjs";
import { idToUuid, getBlockIcon } from "notion-utils";
// import * as notion from '../../../lib/notion'
// import postcss from 'postcss';
import { getPageTitle, getPageProperty } from "notion-utils";
import { pagesStaticParam } from "../../../../lib/notion/getData";
import getAllPageIds from "../../../../lib/notion/getAllPageIds";

const mapImgUrl = (img, block) => {
    let ret = null;
  
    if (img.startsWith("/")) {
      ret = "https://www.notion.so" + img;
    } else {
      ret = img;
    }
  
    if (ret.indexOf("amazonaws.com") > 0) {
      ret =
        "https://www.notion.so" +
        "/image/" +
        encodeURIComponent(ret) +
        "?table=" +
        "collection" +
        "&id=" +
        block.collection_id;
    }
  
    return ret;
  };
export async function generateStaticParams() {
  return pagesStaticParam()
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug // 'a', 'b', or 'c'
  //获取页面信息
  let data;
  if ((await getDataFromCache(slug)) == null) {
      const notion = new NotionAPI();
      const recordMap = await notion.getPage(slug);
      const block = recordMap.block;
      const rawMetadata = block[slug].value;
    
      const collection = Object.values(recordMap.collection)[0]?.["value"];
      const schema = collection?.schema;
      data = await getPageProperties(slug, block, schema);
      // const tags = await getPageProperty(
      //   "tags",
      //   recordMap["block"][slug]["value"],
      //   recordMap
      // )properties
      
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
        
      if (block[slug].value?.format?.page_cover) {
        data["cover"] =
          mapImgUrl(block[slug].value?.format?.page_cover, block[slug].value) ??
          "";
      } 
      else {
        data["cover"] =
          "https://www.notion.so/images/page-cover/met_fitz_henry_lane.jpg";
      }
    
      data["icon"] = getBlockIcon(rawMetadata, recordMap);
      data['mainTitle'] = collection["name"][0][0];
      data["recordMap"] = recordMap;

      //获取第一个用户
      const id = idToUuid(process.env.PAGE_ID);
      //视图号
      const response = await notion.getPage(id);
      const collectionQuery = response.collection_query;
      const pageIds = getAllPageIds(collectionQuery);
      
      for (let i = 0; i < pageIds.length; i++) {
        const id = pageIds[i];
        const properties = (await getPageProperties(id, block, schema)) || null;
        if (!properties["title"]) {
          continue;
        }
        if (properties["Person"]) {
          data['mainUser'] = properties["Person"][0]["name"];
          break;
        }
      }


      
      await setDataToCache(slug, data);
  //   console.log("N");
  } else {
    data = await getDataFromCache(slug);
  //   console.log("Y");
  }
  return Response.json({ data })
}
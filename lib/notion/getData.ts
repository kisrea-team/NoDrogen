/***
 *               ii.                                         ;9ABH,
 *              SA391,                                    .r9GG35&G
 *              &#ii13Gh;                               i3X31i;:,rB1
 *              iMs,:,i5895,                         .5G91:,:;:s1:8A
 *               33::::,,;5G5,                     ,58Si,,:::,sHX;iH1
 *                Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG
 *                .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8
 *               :SB9s:,............................,,,.,,,SASh53h,1G.
 *            .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,
 *          ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi
 *        i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1
 *       59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s
 *      s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99
 *      93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83
 *      G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh
 *      Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:
 *     ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8
 *     X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs
 *    r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:
 *   :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59
 *  .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr
 *  SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5
 *  91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S
 *  hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99
 *  ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83
 *   s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1
 *    SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&,
 *     iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA
 *      ,8X5;   .     .......                                       ,;iihS8Gi
 *         1831,                                                 .,;irrrrrs&@
 *           ;5A8r.                                            .:;iiiiirrss1H
 *             :X@H3s.......                                .,:;iii;iiiiirsrh
 *              r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
 *             ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
 *             8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
 *            i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
 *            9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111
 */

//import { config as BLOG } from '@/lib/server/config'
import { NotionAPI } from "notion-client";
import { idToUuid } from "notion-utils";
import { cache } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import getAllPageIds from "./getAllPageIds";
import getPageProperties from "./getPageProperties";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("zh-cn");

/**
 * Paginates an array of items.
 * @param items Array of items to paginate
 * @param pageNumber Current page number
 * @param pageSize Number of items per page
 */
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
}
export async function getMainUser() {
  const { NOTION_ACCESS_TOKEN } = process.env;
  const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
  const id = idToUuid(process.env.PAGE_ID);
  //视图号
  const response = await client.getPage(id);
  const collectionQuery = response.collection_query;
  const pageIds = getAllPageIds(collectionQuery);
  const block = response.block;
  const collection = Object.values(response.collection)[0]?.["value"];
  const schema = collection?.schema;
  for (let i = 0; i < pageIds.length; i++) {
    const id = pageIds[i];
    const properties = (await getPageProperties(id, block, schema)) || null;
    if (!properties["title"]) {
      continue;
    }
    if (properties["Person"]) {
      return properties["Person"][0]["name"];
    }
  }
}

/**
 * Gets all posts based on specified criteria.
 * @param item Type of item to retrieve (1 for posts, others for collection views)
 * @param source Source data to filter
 * @param type Type of posts to filter
 */
export async function getAllPosts(item, source, type) {
  function getLastTimeStr(time: string, friendly: boolean) {
    if (friendly) {
      return dayjs(time).fromNow().replace(" ", "");
    }
    return dayjs(new Date(time)).format("YYYY-MM-DD HH:mm");
  }

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

  switch (item) {
    case 1:
      const posts = source.filter((post) => {
        return (
          post.title && post?.status?.[0] === "展现" && post?.type?.[0] === type
        );
      });
      return posts;
      break;
    default:
      const { NOTION_ACCESS_TOKEN } = process.env;
      const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
      const id = idToUuid(process.env.PAGE_ID);
      const response = await client.getPage(id);
      const users = response?.notion_user;
      const notion_users = [];

      const collection = Object.values(response.collection)[0]?.["value"];
      const collectionQuery = response.collection_query;
      const block = response.block;
      const schema = collection?.schema;
      const rawMetadata = block[id].value;
      const tagSchema = Object.values(schema);
      const tagOptions = tagSchema?.[3]?.["options"];
      const pageCover = mapImgUrl(collection["cover"], rawMetadata);
      const icon = mapImgUrl(collection["icon"], rawMetadata);

      if (
        rawMetadata?.type !== "collection_view_page" &&
        rawMetadata?.type !== "collection_view"
      ) {
        console.log(`pageId "${id}" is not a database`);
        return null;
      } else {
        const pageIds = getAllPageIds(collectionQuery);
        let data = [];

        for (let i = 0; i < pageIds.length; i++) {
          const id = pageIds[i];
          const properties =
            (await getPageProperties(id, block, schema)) || null;
          if (!properties["title"]) {
            continue;
          }

          properties["fullWidth"] =
            block[id].value?.format?.page_full_width ?? false;

          properties["start_date"] = properties["date"]?.start_date
            ? dayjs(properties["date"]?.start_date).valueOf()
            : block[id].value?.created_time;

          properties["date"] = getLastTimeStr(properties["start_date"], true);

          properties["start_date"] = dayjs(properties["start_date"])
            .format("YYYY年MM月DD日")
            .valueOf();
          if (block[id].value?.format?.page_icon) {
            properties["icon"] = mapImgUrl(
              block[id].value?.format?.page_icon,
              block[id].value
            );
          }

          if (block[id].value?.format?.page_cover) {
            properties["cover"] =
              mapImgUrl(block[id].value?.format?.page_cover, block[id].value) ??
              "";
          } else {
            properties["cover"] =
              "https://www.notion.so/images/page-cover/met_fitz_henry_lane.jpg";
          }

          properties["tags"] =
            properties?.["tags"]?.map((tag) => {
              return {
                name: tag,
                color:
                  tagOptions?.find((t) => t.value === tag)?.color || "gray",
              };
            }) || [];

          if (properties["Person"]) {
            let filtered = notion_users.filter(
              (item) => item.id !== properties["Person"].id
            );
            if (filtered.length === notion_users.length) {
              notion_users.push(properties["Person"]);
            }
          }

          data.push(properties);
        }

        data = data.sort((objA, objB) => objB.start_date - objA.start_date);
        const wiki = {
          icon: icon,
          cover: pageCover,
          name: collection["name"][0][0],
          description: collection["description"][0][0],
          user: notion_users,
        };

        data.unshift(wiki);
        console.log(data);
        return data;
      }
  }
}

export default cache(getAllPosts);

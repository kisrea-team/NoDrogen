/*
 * @Author: zitons
 * @Date: 2024-02-14 17:01:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-14 17:43:04
 * @Description: 建立sitemap
 */
// import { MetadataRoute } from 'next'
 // sitemap.ts
 import { idToUuid, getBlockIcon } from "notion-utils";
 import { NotionAPI } from "notion-client";
 import getAllPageIds from "../../lib/notion/getAllPageIds";
 
 // import * as notion from '../../../lib/notion'
 // import postcss from 'postcss';
// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const { NOTION_ACCESS_TOKEN } = process.env;
//   const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
//   const id = idToUuid(process.env.PAGE_ID);
//   //视图号
//   const response = await client.getPage(id);
//   const collectionQuery = response.collection_query;
//   const pageIds = getAllPageIds(collectionQuery);

//   const postUrls =
//     pageIds &&
//     pageIds.map((post) => ({
//       url: `http://zitons.kisrea.com/blog/${post}`,
//       lastModified: new Date(post.date),
//     }));

//   return [...postUrls];
// }




/** app/sitemap.xml/route.ts **/

// dynamically generate sitemap xml data
async function getSitemap() {
    const map = [
      {
        url: process.env.BLOG,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      }
    ];
    const { NOTION_ACCESS_TOKEN } = process.env;
    const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });
    const id = idToUuid(process.env.PAGE_ID);
    //视图号
    const response = await client.getPage(id);
    const collectionQuery = response.collection_query;
    const pageIds = getAllPageIds(collectionQuery);

    return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pageIds
        .map(
          (item) => `
              <url>
                <loc>${process.env.BLOG+"blog/"+item}</loc>
                <priority>0.8</priority>
              </url>
            `,
        )
        .join('')}

      </urlset>
    `;
  }
  
  export async function GET() {
    return new Response(await getSitemap(), {
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }
  
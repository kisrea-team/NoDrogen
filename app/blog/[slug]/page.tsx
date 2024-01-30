
//import * as React from 'react'
import { NotionPage } from '../../../components/NotionPage'
import { idToUuid } from 'notion-utils'
import { NotionAPI } from "notion-client"
import getAllPageIds from '../../../lib/notion/getAllPageIds'
import * as notion from '../../../lib/notion'

// import { getAllPosts } from '../../lib/notion/getData'
// import postcss from 'postcss';
import styles from '../../../components/Head.module.css'
import { getPageTitle ,getPageProperty} from 'notion-utils'
export async function generateStaticParams() {
   const { NOTION_ACCESS_TOKEN } = process.env
   const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN })
   const id = idToUuid(process.env.VIEW_ID)
   //视图号
   const response = await client.getPage(id)
   const collectionQuery = response.collection_query
   const pageIds = getAllPageIds(collectionQuery)
   console.log(pageIds)
   return pageIds.map((post) => ({
     slug: post,
   }))
 }
export default async function Page({ params }) {
   const { slug } = params
   const notion = new NotionAPI();

   const recordMap = await notion.getPage(slug);
   // const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");
   
   const title = getPageTitle(recordMap)
   if(!title)
   {
      return;
   }
   // const description=getPageProperty("summary",recordMap['block'][slug]['value'],recordMap)
   // console.log(description)
   return (
      <>
      
      
      {/* <div className={styles.header}>
         <title>{title}</title>
         <meta name="description" content={String(description)}/>
      </div> */}
      
      <main >
         <NotionPage recordMap={recordMap} />
      </main>
      </>
   );
   // console.log(posts)
}

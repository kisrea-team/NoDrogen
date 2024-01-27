
//import * as React from 'react'
import { NotionPage } from '../../components/NotionPage'
import { NotionAPI } from "notion-client"
// import { getAllPosts } from '../../lib/notion/getData'
// import postcss from 'postcss';
import styles from '../../components/Head.module.css'
import { getPageTitle ,getPageProperty} from 'notion-utils'

export default async function Page({ params }: { params: { slug: string } }) {

   const notion = new NotionAPI();

   const recordMap = await notion.getPage(params.slug);
   // const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");

   const title = getPageTitle(recordMap)
   const description=getPageProperty("summary",recordMap['block'][params.slug]['value'],recordMap)
   console.log(description)
   return (
      <>
      
      
      <div className={styles.header}>
         <title>{title}</title>
         <meta name="description" content={String(description)}/>
      </div>
      
      <main >
         <NotionPage recordMap={recordMap} />
      </main>
      </>
   );
   // console.log(posts)
}

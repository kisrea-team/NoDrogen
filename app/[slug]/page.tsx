
//import * as React from 'react'
import { NotionPage } from '../../components/NotionPage'
import { NotionAPI } from "notion-client"
import { getAllPosts } from '../../lib/notion/getData'
import postcss from 'postcss';



export default async function Page({ params }: { params: { slug: string } }) {


   const notion = new NotionAPI();

   const recordMap = await notion.getPage(params.slug);
   // const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");


   return (
      <main >
         <NotionPage recordMap={recordMap} />
      </main>
   );
   // console.log(posts)
}

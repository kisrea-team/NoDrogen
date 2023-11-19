import * as React from 'react'
import { NotionPage } from '../components/NotionPage'
import { NotionAPI } from "notion-client"
import { getAllPosts } from '../lib/notion/getData'

import 'react-notion-x/src/styles.css'
import '../styles/globals.css'//引用样式

import Head from '../components/Head'

export default async function Home() {
 

   const notion = new NotionAPI();

   // const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
   const recordMap  = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");
   const posts = await getAllPosts({ includePages: false })

   console.log(posts)
   
   return (
      <main>
         {/* <NotionPage recordMap={recordMap} /> */}
         {/* <h1>{posts[0].title}</h1> */}
         <h1 className='text-center text-4xl font-bold'>{posts.length}</h1>
         <Head/>
      </main>
   );
}
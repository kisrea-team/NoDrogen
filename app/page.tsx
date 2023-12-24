//import * as React from 'react'
//import { NotionPage } from '../components/NotionPage'
//import { NotionAPI } from "notion-client"
import { cache } from 'react'
import { Suspense } from 'react'
// import { getAllPosts } from '../lib/notion/getData'
// import { getAllTagsFromPosts } from '../lib/notion/getAllTagsFromPosts'




import Head from '../components/Head'
import Main from '../components/Main'
import List from '../components/List'
// import { list } from 'postcss'

export default async function Home() {


   // const notion = new NotionAPI();

   // const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
   // const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");
   // const id = "1ac8cfb2dde44bbc8f6ed18d2acb1e3b";

   // const source = await getAllPosts(0,0)
   // //21
   // const posts = await getAllPosts(1,source)
   // const list=posts.slice(1)
   // const tags = await getAllTagsFromPosts(posts)
   // console.log(tags)
   return (
      <main className='mx-auto container'>
         {/* <link rel='icon' href={posts[0].icon} />
         <title>{posts[0]['name']}</title> */}
         {/* <NotionPage recordMap={recordMap} /> */}
         
         <Suspense fallback={
         <div>
            <h1>Hello, world!</h1>
            <p>Fast is slow.</p>
            <p>欲速则不达。</p>
            <p>年轻一代应该有理想，有目标</p>
         </div>}>
         <Head/>
         <Main/>
         <List/>
         {/* <Main view={posts[0]} posts={list} />
         <List view={posts[0]} posts={list} tags={tags} /> */}
         </Suspense>
      </main>
   );
}
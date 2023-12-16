//import * as React from 'react'
//import { NotionPage } from '../components/NotionPage'
//import { NotionAPI } from "notion-client"

import { getAllPosts } from '../lib/notion/getData'
import { getAllTagsFromPosts } from '../lib/notion/getAllTagsFromPosts'



import Head from '../components/Head'
import Main from '../components/Main'
import List from '../components/List'

export default async function Home() {


   // const notion = new NotionAPI();

   // const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
   // const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");
   const id = "1ac8cfb2dde44bbc8f6ed18d2acb1e3b";
   const posts = await getAllPosts(0)
   const tags = await getAllTagsFromPosts(posts)
   console.log(tags)
   return (
      <main className='mx-auto container'>
         <link rel='icon' href={posts[0].icon} />
         <title>{posts[0]['name']}</title>
         {/* <NotionPage recordMap={recordMap} /> */}
         <Head view={posts[0]} />
         <Main view={posts[0]} posts={posts} />
         <List view={posts[0]} posts={posts} />
      </main>
   );
}
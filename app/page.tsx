import * as React from 'react'
import { NotionPage } from '../components/NotionPage'
import { NotionAPI } from "notion-client"
import { getAllPosts } from '../lib/notion/getData'



import Head from '../components/Head'
import Main from '../components/Main'

export default async function Home() {


   const notion = new NotionAPI();

   // const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
   const recordMap = await notion.getPage("1ac8cfb2dde44bbc8f6ed18d2acb1e3b");
   const posts = await getAllPosts(1)
   const post = await getAllPosts(0)
   console.log(post)
   // console.log(posts['name'])

   return (
      <main className='container  mx-auto'>
         {/* <NotionPage recordMap={recordMap} /> */}
         <Head />
         <Main />
      </main>
   );
}
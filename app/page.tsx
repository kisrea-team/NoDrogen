//import * as React from 'react'
//import { NotionPage } from '../components/NotionPage'
//import { NotionAPI } from "notion-client"
import { cache } from 'react'
import { Suspense } from 'react'
// import { getAllPosts } from '../lib/notion/getData'
// import { getAllTagsFromPosts } from '../lib/notion/getAllTagsFromPosts'
import {setDataToCache,getDataFromCache} from '../lib/cache'
import { getAllPosts } from '../lib/notion/getData'
import './globals.css'


// // core styles shared by all of react-notion-x (required)
// import 'react-notion-x/src/styles.css'

// // used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'

// // used for rendering equations (optional)
// import 'katex/dist/katex.min.css'

// import './globals.css'
// import '../app/copy.css'

import Head from '../components/Head'
import Main from '../components/Main'
import List from '../components/List'
import { Loading } from '../components/Loading'

// import { list } from 'postcss'
async function getIcon() {
let posts
if (await getDataFromCache("posts") != null) {
   posts = await getDataFromCache("posts")
}
else
{
   posts = await getAllPosts(0, 0 ,0)
   await setDataToCache("posts", posts)
}
const notes = await getAllPosts(1, posts ,"Notes")
const star = await getAllPosts(1, posts ,"精选")
//筛选notes
console.log(notes)
console.log(star)
return posts[0]['icon'];

}

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
   const icon:any = await getIcon()
   return (
      <main className='mx-auto container space-y-6'>
         {/* <link rel='icon' href={posts[0].icon} /> */}
         {/* <title>{posts.name}</title> */}
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
         <Suspense fallback={<h1>icon .</h1>}>
         {
                     
               icon.startsWith('http') > 0 ?
               <link rel="shortcut icon" href={`${await getIcon()}`} type="image/x-icon"/>

               :  <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${await getIcon()}</text></svg>`}/>

         }
         </Suspense>

         {/* <Main view={posts[0]} posts={list} />
         <List view={posts[0]} posts={list} tags={tags} /> */}
         </Suspense>
      </main>
   );
}
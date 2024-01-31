//import * as React from 'react'
//import { NotionPage } from '../components/NotionPage'
//import { NotionAPI } from "notion-client"
import { cache } from 'react'
import { Suspense } from 'react'
// import { getAllPosts } from '../lib/notion/getData'
// import { getAllTagsFromPosts } from '../lib/notion/getAllTagsFromPosts'
import {setDataToCache,getDataFromCache} from '../../lib/cache'
import { getAllPosts } from '../../lib/notion/getData'
import '../globals.css'
import { lazy } from 'react';

// import 'katex/dist/katex.min.css'
// import 'prismjs/themes/prism-tomorrow.css'

// // core styles shared by all of react-notion-x (required)
// import 'react-notion-x/src/styles.css'

// // used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'

// // used for rendering equations (optional)
// import 'katex/dist/katex.min.css'

// import './globals.css'
// import '../app/copy.css'

import Head from '../../components/Head'
import Main from '../../components/Main'
//import List from '../components/List'

import { Loading } from '../../components/Loading'




// export default async function Home({
//    searchParams,
//  }: {
//    searchParams?: {
//      page?: string,
//    },
//  }) {

export async function generateStaticParams() {
   let posts
   posts = await getAllPosts(0, 0, 0)
   const view = posts[0];
   posts = posts.slice(1);
   const star = await getAllPosts(1, posts, "精选")
   posts = posts.filter(post => {
      return post?.type?.[0] != "精选";
   })
   const pagesCount = Math.ceil(posts.length / 10); // 100/10
   const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
   return pages.map((post) => ({
      slug: String(post),
   }))
}
export default async function Page({ params }) {
   const { slug } = params
   const List = lazy(() => import('../../components/List'));
   return (

      <main className='mx-auto container space-y-6'>
         <Suspense fallback={
         
         <div>
            {/* <h1>Hello, world!</h1>
            <p>Fast is slow.</p>
            <p>欲速则不达。</p>
            <p>年轻一代应该有理想，有目标</p> */}
            <Loading/>
         </div>}>
         <Head/>
         {/* <Main/> */}
         
         <List currentPage={slug||1}/>
         <p>第{slug||1}页</p>
         {/* <IconPreview/> */}
         </Suspense>
      </main>
   );
}

export async function generateMetadata() {
   let posts,icon
   if (await getDataFromCache("posts") != null) {
      posts = await getDataFromCache("posts")
      
   }
   else
   {
      posts = await getAllPosts(0, 0 ,0)
      await setDataToCache("posts", posts)
   }
   if(posts[0]['icon'].startsWith('http') <= 0)
   {
      icon="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>"+posts[0]['icon']+"</text></svg>"
   }
   // <link rel="icon" href={posts[0]['icon']} type="image/x-icon"/>
//  <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${posts[0]['icon']}</text></svg>`}/>

   return{ 
      title:posts[0]['name'],
      icons: icon,
      description:posts[0]['description']

   };
}

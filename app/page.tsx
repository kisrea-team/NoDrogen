import * as React from 'react'
import { NotionPage } from '../components/NotionPage'
import { NotionAPI } from "notion-client"
import { getAllPosts } from '../lib/notion/getData'



export default async function Home() {
    console.log('test')

    const notion = new NotionAPI();
  
    // const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
    const posts = await getAllPosts({ includePages: false })

    console.log(posts)
    return (
      <main>
        {/* <NotionPage recordMap={recordMap} /> */}
      </main>
    );
  }
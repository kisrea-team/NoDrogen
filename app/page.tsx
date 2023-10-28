import * as React from 'react'
import { NotionPage } from '../components/NotionPage'
import { NotionAPI } from "notion-client"




export default async function Home() {
    const notion = new NotionAPI();
  
    const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
    return (
      <main>
        <NotionPage recordMap={recordMap} />
      </main>
    );
  }
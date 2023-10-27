import * as React from 'react'
import { ExtendedRecordMap } from 'notion-types'
import * as notion from '../lib/notion'
import { NotionPage } from '../components/NotionPage'
import { NotionAPI } from "notion-client";

import {
  previewImagesEnabled,
  rootDomain,
  rootNotionPageId
} from '../lib/config'




export default async function Home() {
    const notion = new NotionAPI();
  
    const recordMap = await notion.getPage("4f51a601c1b14a23b5bc7737efcfee6b");
    return (
      <main>
        <NotionPage recordMap={recordMap} />
      </main>
    );
  }
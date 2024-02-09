import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";
import { NotionCompatAPI } from "notion-compat";
import { ExtendedRecordMap, SearchParams, SearchResults } from "notion-types";

import { getPreviewImageMap } from "./preview-images";

const notion = new NotionAPI();

export async function getPage(pageId: string): Promise<ExtendedRecordMap> {
  const recordMap = await notion.getPage(pageId);

  const previewImageMap = await getPreviewImageMap(recordMap);
  (recordMap as any).preview_images = previewImageMap;

  return recordMap;
}

export async function search(params: SearchParams): Promise<SearchResults> {
  return notion.search(params);
}

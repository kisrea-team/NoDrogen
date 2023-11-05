import { NotionAPI } from 'notion-client'

const { NOTION_ACCESS_TOKEN } = process.env

const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN })

export async function getPostBlocks (id) {
  const pageBlock = await client.getPage(id)
  return pageBlock
}
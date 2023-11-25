//import { config as BLOG } from '@/lib/server/config'
import { NotionAPI } from 'notion-client'
import { idToUuid } from 'notion-utils'

import getAllPageIds from './getAllPageIds'
import getPageProperties from './getPageProperties'
//自开发库

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('en');
//截至

const { NOTION_ACCESS_TOKEN } = process.env

const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN })
/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */
export async function getAllPosts (item) {
  const id = idToUuid("1ac8cfb2dde44bbc8f6ed18d2acb1e3b")

  const response = await client.getPage(id)
//获取page块的信息
  const collection = Object.values(response.collection)[0]?.['value']
//获取page数据集的第一个id的value内容
  const collectionQuery = response.collection_query
  const block = response.block
  const schema = collection?.schema
  const rawMetadata = block[id].value



  switch (item) {
      case 1:
          const data = {"cover":collection['cover'],name:collection['name'][0][0],description:collection['description'][0][0]};
          return data
          break;
      default:
        //获取本身的rawMetadata
          // Check Type
          if (
            rawMetadata?.type !== 'collection_view_page' &&
            rawMetadata?.type !== 'collection_view'
          ) {
            console.log(`pageId "${id}" is not a database`)
            return null
            //如果这个块不是视图则返回错误
          } else {
            // 构造数据
            const pageIds = getAllPageIds(collectionQuery)
            //获取所有page的id（yy）
            const data = []
            //遍历所有的page
            for (let i = 0; i < pageIds.length; i++) {
              const id = pageIds[i]
              const properties = (await getPageProperties(id, block, schema)) || null
              //获取单个页面的属性
              // Add fullwidth to properties
              properties['fullWidth'] = block[id].value?.format?.page_full_width ?? false
              //设置页面格式的属性
              // Convert date (with timezone) to unix milliseconds timestamp
              properties['date'] = (
                properties['date']?.start_date
                  ? dayjs.tz(properties['date']?.start_date) 
                  : dayjs(block[id].value?.created_time)
              ).valueOf()
        //属性里有起始时间就转换时区，没有就获取block的时间
              data.push(properties)
              //把页面的属性推给data
            }

            // remove all the the items doesn't meet requirements

            // // Sort by date
            // if (BLOG.sortByDate) {
            //   posts.sort((a, b) => b.date - a.date)
            // }
            return data
          }
} 









}
//import { config as BLOG } from '@/lib/server/config'
import { NotionAPI } from 'notion-client'
import { idToUuid } from 'notion-utils'
import {cache} from 'react';

//import { defaultMapImageUrl } from 'react-notion-x'

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

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */



export async function getAllPosts(item,source,type) {



   //console.log(collection)//断点这个获取的信息特别乱，不过也可以看看
   //追求模块化、需要再取

   const mapImgUrl = (img, block) => {
      let ret = null
      // 相对目录，则视为notion的自带图片
      if (img.startsWith('/')) {
         ret = "https://www.notion.so" + img
      } else {
         ret = img
      }

      // Notion 图床转换为永久地址
      if (ret.indexOf('amazonaws.com') > 0) {
         ret = "https://www.notion.so" + '/image/' + encodeURIComponent(ret) + '?table=' + "collection" + '&id=' + block.collection_id
      }

      // 文章封面

      return ret
   }








   switch (item) {
      case 1:
         const posts = source.filter(post => {
            return post.title && post?.status?.[0] === '展现'  && post?.type?.[0] === type;
          })
          //console.log(posts)
          return posts
         break; 
      default:
         
         const { NOTION_ACCESS_TOKEN } = process.env
         const client = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN })
         const id = idToUuid(process.env.VIEW_ID)
         //视图号
         const response = await client.getPage(id)
         console.log(response)
         //获取page块的信息
         const collection = Object.values(response.collection)[0]?.['value']
         //获取page数据集的第一个id的value内容
         const collectionQuery = response.collection_query
         const block = response.block
         const schema = collection?.schema
         const rawMetadata = block[id].value
        // console.log(rawMetadata)
         const tagSchema = Object.values(schema)
         const tagOptions=tagSchema?.[4]?.['options']
         const pageCover = mapImgUrl(collection['cover'], block[id].value)

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
                     ? dayjs.tz(properties['date']?.start_date).format('YYYY年MM月DD日')
                     : dayjs(block[id].value?.created_time).format('YYYY年MM月DD日')
               ).valueOf()
               if(block[id].value?.format?.page_icon)
               {
               properties['icon'] = mapImgUrl(block[id].value?.format?.page_icon,block[id].value)
               }
               if(block[id].value?.format?.page_cover)
               {
               properties['cover'] = mapImgUrl(block[id].value?.format?.page_cover, block[id].value) ?? ''
               }
               properties['tags'] = properties?.['tags']?.map(tag => {
                  return { name: tag, color: tagOptions?.find(t => t.value === tag)?.color || 'gray' }
                }) || []
               //属性里有起始时间就转换时区，没有就获取block的时间
               data.push(properties)
               
               //把页面的属性推给data
            }
            const wiki = { "icon": collection['icon'][0],"cover": pageCover, name: collection['name'][0][0], description: collection['description'][0][0] };
            data.unshift(wiki)
            // remove all the the items doesn't meet requirements

            // // Sort by date
            // if (BLOG.sortByDate) {
            //   posts.sort((a, b) => b.date - a.date)
            // }
            console.log(data)
            return data
         }
   }









}


export default cache(getAllPosts);

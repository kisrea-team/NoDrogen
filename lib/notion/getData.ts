
import { idToUuid } from 'notion-utils'
import { NotionAPI } from 'notion-client'

export async function getPageWithRetry(id, from, retryAttempts = 3) {
  if (retryAttempts && retryAttempts > 0) {
    console.log('[请求API]', `from:${from}`, `id:${id}`, retryAttempts < 3 ? `剩余重试次数:${retryAttempts}` : '')
    try {
      const authToken = ''
      const api = new NotionAPI({ authToken, userTimeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
      const pageData = await api.getPage(id)
      console.info('[响应成功]:', `from:${from}`)
      return pageData
    } catch (e) {
      console.warn('[响应异常]:', e)
      
      return await getPageWithRetry(id, from, retryAttempts - 1)
    }
  } else {
    console.error('[请求失败]:', `from:${from}`, `id:${id}`)
    return null
  }
}

export default function getAllPageIds (collectionQuery, collectionId, collectionView, viewIds) {
  if (!collectionQuery && !collectionView) {
    return []
  }
  let pageIds = []
  if (collectionQuery && Object.values(collectionQuery).length > 0) {
    const pageSet = new Set()
    Object.values(collectionQuery[collectionId]).forEach(view => {
      view?.blockIds?.forEach(id => pageSet.add(id)) // group视图
      view?.collection_group_results?.blockIds?.forEach(id => pageSet.add(id)) // table视图
    })
    pageIds = [...pageSet]
    // console.log('PageIds: 从collectionQuery获取', collectionQuery, pageIds.length)
  } else if (viewIds && viewIds.length > 0) {
    const ids = collectionView[viewIds[0]].value.page_sort
    // console.log('PageIds: 从viewId获取', viewIds)
    for (const id of ids) {
      pageIds.push(id)
    }
  }
  return pageIds
}

export async function getPostBlocks(id, from) {

  const start = new Date().getTime()
  const pageBlock = await getPageWithRetry(id, from)
  const end = new Date().getTime()
  console.log('[API耗时]', `${end - start}ms`)

 
  return pageBlock
}

async function getDataBaseInfoByNotionAPI({ pageId, from }) {
  const pageRecordMap = await getPostBlocks(pageId, from)
  if (!pageRecordMap) {
    console.error('can`t get Notion Data ; Which id is: ', pageId)
    return {}
  }
  pageId = idToUuid(pageId)
  const block = pageRecordMap.block || {}
  const rawMetadata = block[pageId]?.value
  // Check Type Page-Database和Inline-Database
  if (
    rawMetadata?.type !== 'collection_view_page' && rawMetadata?.type !== 'collection_view'
  ) {
    console.error(`pageId "${pageId}" is not a database`)
    return ''
  }
  const collection = Object.values(pageRecordMap.collection)[0]?.value || {}
  //const siteInfo = getSiteInfo({ collection, block })
  const collectionId = rawMetadata?.collection_id
  const collectionQuery = pageRecordMap.collection_query
  const collectionView = pageRecordMap.collection_view
  const schema = collection?.schema

  const viewIds = rawMetadata?.view_ids
  const collectionData = []
  const pageIds = getAllPageIds(collectionQuery, collectionId, collectionView, viewIds)
  if (pageIds?.length === 0) {
    console.error('获取到的文章列表为空，请检查notion模板', collectionQuery, collection, collectionView, viewIds, pageRecordMap)
  }
  for (let i = 0; i < pageIds.length; i++) {
    const id = pageIds[i]
    const value = block[id]?.value
    if (!value) {
      continue
    }
    // const properties = (await getPageProperties(id, block, schema, null, getTagOptions(schema))) || null
    // if (properties) {
    //   collectionData.push(properties)
    // }
  }

  // 文章计数
  let postCount = 0
  // 查找所有的Post和Page
  const allPages = collectionData.filter(post => {
    if (post.status === 'Published') {
      postCount++
    }
    return post?.status === 'Published'
  })

}
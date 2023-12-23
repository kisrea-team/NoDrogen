import cache from 'memory-cache'

const cacheTime = 12000 * 60 // 120 minutes for dev,10 minutes for prod

export async function getCache(key) {

    return await cache.get(key)
  
}

export async function setCache(key, data) {
  await cache.put(key, data, cacheTime * 1000)
}

export async function delCache(key) {
  await cache.del(key)
}

export default { getCache, setCache, delCache }
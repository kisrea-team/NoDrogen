import cache from "memory-cache";

const cacheTime = 12000 * 60; // 120 minutes for dev,10 minutes for prod

export async function getDataFromCache(key) {
  if (1) {
    const dataFromCache = await cache.get(key);
    if (JSON.stringify(dataFromCache) === "[]") {
      return null;
    }
    return cache.get(key);
  } else {
    return null;
  }
}

export async function setDataToCache(key, data) {
  if (!data) {
    return;
  }
  await cache.put(key, data, cacheTime * 1000);
}

export async function delCacheData(key) {
  if (!1) {
    return;
  }
  await cache.del(key);
}

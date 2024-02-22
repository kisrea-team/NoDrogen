/*
 * @Author: zitons
 * @Date: 2024-02-22 21:10:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 21:12:32
 * @Description: 简介
 */
export async function getData(to) {
    const res = await fetch(process.env.NEXT_PUBLIC_BLOG+to)
    
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
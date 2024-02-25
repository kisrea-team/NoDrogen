/*
 * @Author: zitons
 * @Date: 2024-02-22 21:10:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-23 19:37:42
 * @Description: 简介
 */
export async function getData(to) {
  if (to == "api/blog/%5Bslug%5D") {
    console.log("Try to fix build bugs...")
    to = "api/blog/"+process.env.NEXT_PUBLIC_FIRST_SLUG
  }
  console.log(`run ${process.env.NEXT_PUBLIC_PROTOCOL + process.env.NEXT_PUBLIC_BLOG + "/" + to + "/"}`)
  const data = await fetch(`${process.env.NEXT_PUBLIC_PROTOCOL + process.env.NEXT_PUBLIC_BLOG + "/" + to + "/"}`, {
    cache: "no-cache",
  }).then((res) => res.json());
  return data;
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  // return res.json()
}
/*
 * @Author: zitons
 * @Date: 2024-03-12 21:48:14
 * @LastEditors: 
 * @LastEditTime: 2024-03-12 21:48:19
 * @Description: 简介
 */

export async function GET(
  { params }: { params: { slug: string } }
) {
  const slug = params.slug; // 'a', 'b', or 'c'
  console.log(slug)
}
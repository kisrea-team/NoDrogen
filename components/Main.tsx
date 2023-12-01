'use cilent'
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

const Main = async () => {
   // const posts = await getAllPosts({ includePages: false })
   const posts = await getAllPosts(1)
   console.log(posts['cover'])
   return (
      <div>
         {/* <Image
         src={posts['cover']}
         width={1000}
         height={1000}
         alt='cover'
         /> */}
         <p></p>
      </div>
   )
}
export default Main;
'use cilent'
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

const Main = async () => {
   // const posts = await getAllPosts({ includePages: false })
   const view = await getAllPosts(1)
   console.log(view['cover'])
   return (
      <div>
         {/* <Image
         src={posts['cover']}
         width={1000}
         height={1000}
         alt='cover'
         /> */}
         <p>{view['description']}</p>
      </div>
   )
}
export default Main;
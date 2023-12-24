
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'
import {getCache,setCache} from '../lib/cache'

export default async function Main() {
   // const posts = await getAllPosts({ includePages: false })
   //const view = await getAllPosts(0,0)
   let posts

   
   if (JSON.stringify(getCache("posts")) === '{}') {
      posts = await getAllPosts(0,0)
      setCache("posts",posts)
      console.log("test")
   }
   else
   {
      posts = getCache("posts")
      console.log('posts')
   }
   return (
      <div>
         {/* <div className='relative cover'>
            <Image
               className=''
               src={posts['0']['cover']}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            />
            <div className=' absolute text-center'>{view['0']['description']}</div>
         </div> */}
      </div>
   )
}

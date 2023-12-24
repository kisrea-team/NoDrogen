
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'
import {setDataToCache,getDataFromCache} from '../lib/cache'

export default async function Main() {
   // const posts = await getAllPosts({ includePages: false })
   //const view = await getAllPosts(0,0)
   let posts

   
   if (await getDataFromCache("posts") == null) {
      posts = await getAllPosts(0,0)
      await setDataToCache("posts",posts)
      console.log("no")
   }
   else
   {
      posts = await getDataFromCache("posts")
      console.log('yes')
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

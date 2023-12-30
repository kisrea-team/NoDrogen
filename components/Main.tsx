
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'
import {setDataToCache,getDataFromCache} from '../lib/cache'
import Head from 'next/head'

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
      {/* <Head>
         <link rel="icon" href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${posts[1].icon}</text></svg>`}/>
      </Head> */}

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

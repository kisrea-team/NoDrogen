import { getAllPosts } from '../lib/notion/getData'
import {getCache,setCache} from '../lib/cache'


export  default async function Head() {
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
      <div className='flex pt-4 select-none'>
         <p className='text-2xl font-bold'>{posts['0']['name']}</p>
         <p className='grow'></p>
         <div id='btn-menu' className='btn-menu'></div>
      </div>
   )
}

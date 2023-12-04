'use cilent'
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

const List = async () => {

   const posts = await getAllPosts(0)
   const view = await getAllPosts(1)
   return (
      <div className='flex absolute posts-item '>
         <div className='relative overflow-hidden posts-cover '>
            {/* <p>图片</p> */}
            <Image
               className='object'
               src={view['cover']}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            />
         </div>
         <div className='posts-info py-24 px-12'>
            <p className='posts-title text-2xl/6'>
               <span>{posts[0].icon}</span>{posts[0].title}
            </p>
            <div className='posts-secondary'>
               <span>{posts[0].date}</span>
               <span>{posts[0].tags}</span>
               <span>{posts[0].summary}</span>
            </div>
         </div>
      </div>
   )
}
export default List;
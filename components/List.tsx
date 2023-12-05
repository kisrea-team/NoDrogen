'use cilent'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'
import { getAllPosts } from '../lib/notion/getData'
import Image from 'next/image'

const List = async () => {

   const posts = await getAllPosts(0)
   const view = await getAllPosts(1)

   const listItems = posts.map(list =>

      <div className='flex relative posts-item my-6 '>
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
         <div className='posts-info py-4 px-10'>
            <p className='posts-title text-2xl/6'>
               <span>{list.icon}</span>{list.title}
            </p>
            <div className='posts-secondary'>
               <span>{list.date}</span>
               <span>{list.tags}</span>
               <span>{list.summary}</span>
            </div>
         </div>
      </div>);
   return (
      <div className='flex flex-col space-y-6 '>
         {listItems}
      </div>
   )
}
export default List;
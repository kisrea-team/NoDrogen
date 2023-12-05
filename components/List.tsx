'use cilent'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'
import Image from 'next/image'

export default function List({view,posts}) {



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

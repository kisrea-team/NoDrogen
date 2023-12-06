'use cilent'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'
import Image from 'next/image'

export default function List({ view, posts }) {



   const listItems = posts.map(list =>
      <a href={list.id}>
         <div className='posts-item'>
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
               <p className='posts-title text-2xl/8'>
                  <span>{list.icon}</span>{list.title}{list.type}
               </p>
               <div className='posts-secondary'>
                  <span>{list.date}</span>
                  <span className=' space-x-2'>{list.tags}</span>
                  {/*<div>*/}
                  {/*   {list.tags.map((item, index) => (*/}
                  {/*      <span key={index}*/}

                  {/*         className={`colored-texttext-l p-2calc rounded-md leading-8 m-1 notion-${item.color}_background`}>*/}

                  {/*         {item.name}*/}
                  {/*      </span>))}*/}
                  {/*</div>*/}
                  <span>{list.summary}</span>
               </div>
            </div>
         </div></a>);
   return (
      <div className='flex'>
         <div>{listItems}</div>
         <div className='aaa'>
            <h2>你好Hello</h2>
         </div>
      </div>
   )
}

'use cilent'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react'
import Image from 'next/image'
import { list } from 'postcss';

export default function List({ view, posts }) {



   const listItems = posts.map((list: { id: string; icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode; type: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode; date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode; tags: any[]; summary: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode; }) =>
      <a className='posts-item' href={list.id} target='_blank'>
         {/* <div className='posts-item'> */}
         <div className='posts-heart'>
            {/* <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0 16.8747V0H13V16.8747C13 17.308 12.4864 17.5362 12.1649 17.2458L6.83512 12.4324C6.64477 12.2605 6.35523 12.2605 6.16488 12.4324L0.83512 17.2458C0.513554 17.5362 0 17.308 0 16.8747Z" fill="#838383" fill-opacity="0.27"></path>
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="16.000003814697266" height="22.30051803588867" viewBox="0 0 35.000003814697266 47.30051803588867">
               <path d="M0,45.9367L0,0L35,0L35,45.9367C35,47.1162,33.6172,47.7374,32.7517,46.9469L18.4022,33.8438C17.8898,33.3758,17.1102,33.3758,16.5978,33.8438L2.2484,46.9469C1.38265,47.7374,0,47.1162,0,45.9367Z" fill="#838383" fill-opacity="0.27000001072883606" />
            </svg>
         </div>
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
            <p className='posts-secondary'>
               <span>{list.date}</span>
               <div>
                  {list.tags.map((item: { color: any; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode; }) => (
                     <span className={`colored-texttext-l p-2calc rounded-md leading-8 m-1 notion-${item.color}_background`}>
                        {item.name}
                     </span>
                  ))}
               </div>
               <span>{list.summary}</span>
            </p>
         </div>
         {/* </div> */}
      </a>);
   return (
      <div className='flex mx-auto'>
         <div className='list-items'>{listItems}</div>
         <div className='tags-card'>
            <h1 className='tags-title'>标签</h1>
            {/* <div>
               <span>{posts[0].tags}Good evening</span>
            </div> */}
         </div>
      </div>
   )
}

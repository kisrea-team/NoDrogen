"use client"
import React, { useState } from 'react'
import Image from 'next/image'
// import { list } from 'postcss';

export default function List({ view, posts, tags }) {

   // const [value] = useState("精选");
   //posts.shift()
   const listItems = posts.map((list) =>
      <a className='posts-item' href={list.id} target='_blank'>
         {/* <div className='posts-item'> */}
         {/* <div className={value === posts[2].type ? "posts-heart" : ""}> */}
         <div className='posts-heart'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="16.000003814697266" height="22.30051803588867" viewBox="0 0 35.000003814697266 47.30051803588867">
               <path d="M0,45.9367L0,0L35,0L35,45.9367C35,47.1162,33.6172,47.7374,32.7517,46.9469L18.4022,33.8438C17.8898,33.3758,17.1102,33.3758,16.5978,33.8438L2.2484,46.9469C1.38265,47.7374,0,47.1162,0,45.9367Z" fill="#838383" fill-opacity="0.27000001072883606" />
            </svg>
         </div>
         <div className='relative overflow-hidden posts-cover '>
            {/* <p>图片</p> */}
            <Image
               className='object'
               src={list.cover}
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
               <div className=' list-tags '>
                  {list.tags?.map((item) => (
                     <span className={`tags rounded-md leading-8 m-1 notion-${item.color}_background`}>
                        {item.name}
                     </span>
                  ))}
               </div>
               <span>{list.summary}</span>
            </div>
         </div>
         {/* </div> */}
      </a>);
   const tagsitem = tags?.map((tag) => (
      <span className={`tags rounded-md leading-8 m-1 notion-${tag.color}_background`}>
         {tag.name}
      </span>
   ));
   return (
      <div className='flex mx-auto container'>
         <div className='list-items'>{listItems}</div>
         <div className='tags-card'>
            <h1 className='tags-title'>{posts[1].type}标签</h1>
            <div>
               {tagsitem}
            </div>
         </div>
      </div>
   )
}

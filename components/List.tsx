import { getAllPosts } from '../lib/notion/getData'
import { getAllTagsFromPosts } from '../lib/notion/getAllTagsFromPosts'
import { setDataToCache, getDataFromCache } from '../lib/cache'
import styles from '../components/list.module.css'

import Time from '../components/Time'
import abc from '../public/social.jpg'

//import React, { useState } from 'react'
import Image from 'next/image'
// import { list } from 'postcss';
export default async function List() {
   let posts


   if (await getDataFromCache("posts") == null) {
      posts = await getAllPosts(0, 0, 0)
      await setDataToCache("posts", posts)
      console.log("no")
   }
   else {
      posts = await getDataFromCache("posts")
      console.log('yes')
   }
   const view = posts[0];
   posts = posts.slice(1);
   const tags = await getAllTagsFromPosts(posts)
   const star = await getAllPosts(1, posts, "精选")
   // const [value] = useState("精选");
   //posts.shift()
   const staritems = star?.map((lists) =>
      <a className={styles.posts_item} href={lists.id} target='_blank'>
         <div className={styles.posts_heart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="16.000003814697266" height="22.30051803588867" viewBox="0 0 35.000003814697266 47.30051803588867">
               <path d="M0,45.9367L0,0L35,0L35,45.9367C35,47.1162,33.6172,47.7374,32.7517,46.9469L18.4022,33.8438C17.8898,33.3758,17.1102,33.3758,16.5978,33.8438L2.2484,46.9469C1.38265,47.7374,0,47.1162,0,45.9367Z" fill="#838383" fill-opacity="0.27000001072883606" />
            </svg>
         </div>
         <div className={styles.posts_cover}>
            {/* <p>图片</p> */}
            <Image
               className={styles.cover}
               src={lists.cover}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            />
         </div>
         <div className={styles.posts_info}>
            <p className={styles.posts_title}>
               <span>{lists.icon}</span>{lists.title}{lists.type}
            </p>
            <div className={styles.posts_secondary}>
               <span>{lists.date}</span>
               <div className={styles.list_tags}>
                  {lists.tags?.map((item) => (
                     <span className={`${styles.tags} rounded-md leading-8 m-1 notion-${item.color}_background`}>
                        {item.name}
                     </span>
                  ))}
               </div>
               <span>{lists.summary}</span>
            </div>
         </div>
         {/* </div> */}
      </a>);

   const listItems = posts.map((list) =>
      <a className={styles.posts_item} href={list.id} target='_blank'>
         {/* <div className={styles.posts_heart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="16.000003814697266" height="22.30051803588867" viewBox="0 0 35.000003814697266 47.30051803588867">
               <path d="M0,45.9367L0,0L35,0L35,45.9367C35,47.1162,33.6172,47.7374,32.7517,46.9469L18.4022,33.8438C17.8898,33.3758,17.1102,33.3758,16.5978,33.8438L2.2484,46.9469C1.38265,47.7374,0,47.1162,0,45.9367Z" fill="#838383" fill-opacity="0.27000001072883606" />
            </svg>
         </div> */}
         <div className={styles.posts_cover}>
            {/* <p>图片</p> */}
            <Image
               className={styles.cover}
               src={list.cover}
               // width={1000}
               // height={1000}
               alt='cover'
               fill={true}
            />
         </div>
         <div className={styles.posts_info}>
            <p className={styles.posts_title}>
               <span>{list.icon}</span>{list.title}{list.type}
            </p>
            <div className={styles.posts_secondary}>
               <span>{list.date}</span>
               <div className={styles.list_tags}>
                  {list.tags?.map((item) => (
                     <span className={`${styles.tags} rounded-md leading-8 m-1 notion-${item.color}_background`}>
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
      <span className={`${styles.tags} rounded-md leading-8 m-1 notion-${tag.color}_background`}>
         {tag.name}
      </span>
   ));
   return (
      <div className={`${styles.list_container}`}>
         <div className={styles.list_items}>
            {staritems}
            {listItems}
         </div>
         <div className=''>
            <div>
               <div className={styles.tags_card}>
                  <Time />
                  <div className={styles.avatar_info}>
                     <Image
                        className={styles.avatar}
                        src={view?.['user']?.[1]?.profile_photo}
                        width={100}
                        height={100}
                        alt='牛' />
                  </div>
                  <div>
                     <h1 className={styles.tags_title}>{view?.['user']?.[1]?.name}</h1>
                  </div>
               </div>
            </div>
            <div className={styles.tags_card}>
               <h1 className={styles.tags_title}>标签</h1>
               <div className={styles.tags_item}>
                  {tagsitem}
               </div>
            </div>
         </div>
      </div>
   )
}

"use client"
import React, { useEffect, useState } from "react";
import { useCallback } from 'react';
import Head from "./Head";
import List from './List'
// import { getAllPosts } from "../lib/notion/getData";
// import { setDataToCache, getDataFromCache } from "../lib/cache";



  // let posts;
  // if ((await getDataFromCache("posts")) == null) {
  //   posts = await getAllPosts(0, 0, 0);
  //   await setDataToCache("posts", posts);
  //   console.log("N");
  // } else {
  //   posts = await getDataFromCache("posts");
  //   console.log("Y");
  // }
  // const view = posts["0"];


export default function Main() {
  // const posts = await getAllPosts({ includePages: false })
  //const view = await getAllPosts(0,0)



  let oldScrollY = 0;

  const [direction, setDirection] = useState('up');
  
  const controlDirection = () => {
      if(window.scrollY > oldScrollY) {
          setDirection('down');
      } else {
          setDirection('up');
      }
      oldScrollY = window.scrollY;
  }
  
  useEffect(() => {
      window.addEventListener('scroll', controlDirection);
      return () => {
          window.removeEventListener('scroll', controlDirection);
      };
  },[]);

  return (
    <div>
        <Head />
        {/* <Main/> */}
        {/* <List currentPage={1} /> */}
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
  );
}

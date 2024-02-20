/*
 * @Author: zitons
 * @Date: 2024-02-20 10:39:14
 * @LastEditors: 
 * @LastEditTime: 2024-02-20 11:20:36
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";
import { useRef } from 'react';
import { useCallback } from "react";
import Head from "./Head";
import List from "./Home";
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

export default function Main({ children }: { children: React.ReactNode }) {


  
    let oldScrollY = 0;

    const [direction, setDirection] = useState('up');
    const [y, setY] = useState(0);
    const controlDirection = () => {
        if(window.scrollY > oldScrollY) {
            setDirection('down');
        } else {
            setDirection('up');
        }
        oldScrollY = window.scrollY;
        setY(window.scrollY)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', controlDirection);
        return () => {
            window.removeEventListener('scroll', controlDirection);
        };
    },[]);
    
    useEffect(() => {
      if(y>400)
      {
        document.getElementById("scrolled").style.backgroundColor="black";
      }
      else
      {
        document.getElementById("scrolled").style.backgroundColor="pink";
      }
      //document.title = `${y} times`;
    },[direction,y]);
  
 
  return <>{children}</>;
}
// function setAttribute(arg0: string, arg1: string, arg2: string) {
//   throw new Error("Function not implemented.");
// }

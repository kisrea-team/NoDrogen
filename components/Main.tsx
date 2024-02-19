"use client";
import React, { useEffect, useState } from "react";
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



  
  // const posts = await getAllPosts({ includePages: false })
  //const view = await getAllPosts(0,0)

  // const [y, setY] = useState(window.scrollY);

  // const handleNavigation = useCallback(
  //   (e) => {
  //     const window = e.currentTarget;dui
  //     if (y > window.scrollY) {
  //       console.log("scrolling up");
  //     } else if (y < window.scrollY) {
  //       console.log("scrolling down");
  //     }
  //     setY(window.scrollY);
  //   },
  //   [y]
  // );

  //   useEffect(() => {
  //     setY(window.scrollY);
  //     window.addEventListener("scroll", handleNavigation);

  //     return () => {
  //       window.removeEventListener("scroll", handleNavigation);
  //     };
  //   }, [handleNavigation]);

  // const [scrolled, setScrolled] = useState(false);
  //   useEffect(() => {
  //     window.addEventListener("scroll", gun);
  //     return () => {
  //       window.removeEventListener("scroll", gun);
  //     };
  //   });
  //   const gun = () => {
  //     var add = document.getElementById("scrolled");
  //     if (window.scrollY > 100) {
  //       // add.style.backgroundColor = "black";
  //       setScrollStyle(true);
  //       // setAttribute("scrolled", "scrolled", "");
  //     } else {
  //       // add.style.backgroundColor = "pink";
  //       setScrollStyle(false);
  //     }
  //   };

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 50) {
  //     // 假设滚动超过50px就更改样式
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  // // 使用useEffect来添加和清理事件监听器
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   // 清理函数
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []); // 空数组表示这个effect只在组件挂载和卸载时运行

  // // 根据scrolled状态动态添加或移除样式类
  // var headerClasses = "header";
  // if (scrolled) {
  //   headerClasses += " scrolled";
  // }
  return <>{children}</>;
}
// function setAttribute(arg0: string, arg1: string, arg2: string) {
//   throw new Error("Function not implemented.");
// }

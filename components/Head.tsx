/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: 
 * @LastEditTime: 2024-02-16 17:42:41
 * @Description: 简介
 */
// "use client";
import React from "react";
import { getAllPosts } from "../lib/notion/getData";
import { setDataToCache, getDataFromCache } from "../lib/cache";
import styles from "../components/Head.module.css";

import ThemeSwitcher from "./ui/Dark";

export default async function Head() {
  let posts;
  if ((await getDataFromCache("posts")) == null) {
    posts = await getAllPosts(0, 0, 0);
    await setDataToCache("posts", posts);
    console.log("N");
  } else {
    posts = await getDataFromCache("posts");
    console.log("Y");
  }
  const view = posts["0"];
  return (
    <div className={styles.header}>
      {/* <title>{posts['0']['name']}</title>
         <meta name="description" content={view. description}/> */}
      <div className={styles.head}>
        <p className={styles.title}>{posts["0"]["name"]}</p>
        <p className={styles.grow}></p>
        <ThemeSwitcher />
        <div id={styles.btn_menu} className={styles.btn_menu}></div>
      </div>
    </div>
  );
}
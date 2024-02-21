/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-20 11:11:50
 * @Description: 简介
 */
// "use client";
import React, { useEffect } from "react";
import { getAllPosts } from "../lib/notion/getData";
import { setDataToCache, getDataFromCache } from "../lib/cache";
import styles from "../components/Head.module.css";
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

import ThemeSwitcher from "./ui/ThemeSwitch";
import headerClasses from "././Main";

export const getServerSideProps: GetServerSideProps = async context => {
  let posts;
  if ((await getDataFromCache("posts")) == null) {
    posts = await getAllPosts(0, 0, 0);
    await setDataToCache("posts", posts);
    console.log("N");
  } else {
    posts = await getDataFromCache("posts");
    console.log("Y");
  }
  return {
      props: {posts}
  };
};


export default function Head({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const view = props.posts["0"];
  //   useEffect(() => {
  //     const but = document.querySelector(".land");
  //     but.addEventListener("click", () => {
  //       but.classList.add("haha");
  //     });
  //   });
  console.log(posts)
  const btn = () => {
    document.getElementById("land").classList.add("haha");
  };

  return (
    <>
      <div className={styles.land}>
        <p>sadasd</p>
      </div>
      <header className={styles.header} id="scrolled">
        <p className={styles.title}>{posts["0"]["name"]}</p>
        <div className={styles.grow}></div>
        <div className={styles.right}>
          <ThemeSwitcher />
          <div id={styles.btn_menu} className={styles.btn_menu}>
            <p onClick={btn}></p>
          </div>
        </div>
      </header>
    </>
  );
}

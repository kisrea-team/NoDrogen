/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 17:18:44
 * @Description: 简介
 */
"use client";
import React, { useEffect } from "react";
import styles from "../components/Head.module.css";
import { Component } from 'react';
import ThemeSwitcher from "./ui/ThemeSwitch";
import headerClasses from "././Main";
import ReactDOM from 'react-dom';

async function getData() {

  const res = await fetch(process.env.NEXT_PUBLIC_BLOG+"api")
  
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Head() {
  // const view = props.posts["0"];
  //   useEffect(() => {
  //     const but = document.querySelector(".land");
  //     but.addEventListener("click", () => {
  //       but.classList.add("haha");
  //     });
  //   });

  const d = await getData()
  
  const btn = () => {
    // console.log(document.getElementById("land").classList.contains("haha"))
    
    if(document.getElementById("land").classList.contains("haha")){
      document.getElementById("land").classList.remove("haha");
    }else{
      document.getElementById("land").classList.add("haha");
    }
  };
 

  return (
    <>
{/*     
      <div className={styles.land} id="land">
        <p>sadasd</p>
      </div> */}
      <header className={styles.header} id="scrolled">
        <p className={styles.title}>{d["posts"]["0"]["name"]}</p>
        <div className={styles.grow}></div>
        <div className={styles.right}>
          <ThemeSwitcher />
          <div id={styles.btn_menu} className={styles.btn_menu} onClick={btn}>
            <p></p>
          </div>
        </div>
      </header>
     
    </>
  );
}

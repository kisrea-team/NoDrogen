/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-03 12:42:02
 * @LastEditors: vhko
 * @LastEditTime: 2024-05-12 14:33:56
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./Head.module.css";
import ThemeSwitcher from "./ThemeSwitch";
import Dropdown from "./Dropdown";
// import Timeline from "./ui/timeline";

export default async function Head(props) {
   const btn = () => {
      if (document.getElementById("land").classList.contains("menu")) {
         document.getElementById("land").classList.remove("menu");
      } else {
         document.getElementById("land").classList.add("menu");
      }
   };

   return (
      <>
         <header className={styles.header} id="scrolled">
            <div className={styles.land} id="land">
               <p>sadasd</p>
            </div>

            <p className={styles.title}>{props.title}</p>
            <div className={styles.grow}></div> 
            <div id="acc">
               <Dropdown title={props.title} type={props.type} />
            </div>
            <div className={styles.grow}></div>
            <div className={styles.right}>
               <ThemeSwitcher />
            </div>
            <div className={styles.btn_menu} onClick={btn}>
               {/* <p></p> */}
            </div>
         </header>
      </>
   );
}




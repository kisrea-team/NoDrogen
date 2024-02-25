/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: vhko hirsch-k@outlook.com
 * @LastEditTime: 2024-02-25 20:47:40
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";
import styles from "../components/Head.module.css";
import ThemeSwitcher from "./ui/ThemeSwitch";

export default async function Head(props) {
  const btn = () => {
    if (document.getElementById("land").classList.contains("haha")) {
      document.getElementById("land").classList.remove("haha");
    } else {
      document.getElementById("land").classList.add("haha");
    }
  };

//   let noneY = 0;
//   const [direction, setDirection] = useState("up");
//   const [Y, setY] = React.useState(0);
//   const controlDirection = () => {
//     if (window.scrollY > noneY) {
//       setDirection("down");
//     } else {
//       setDirection("up");
//     }
//     noneY = window.scrollY;
//     setY(window.scrollY);
//   };
//   useEffect(() => {
//     window.addEventListener("scroll", controlDirection);
//     return () => {
//       window.removeEventListener("scroll", controlDirection);
//     };
//   }, []);
//   useEffect(() => {
//     if (Y > 800) {
//       document.getElementById("scrolled").classList.add("niubi");
//     } else {
//       document.getElementById("scrolled").classList.remove("niubi");
//     }
//   }, [direction, Y]);

  return (
    <>
      {/*     
      <div className={styles.land} id="land">
        <p>sadasd</p>
      </div> */}
      <header className={styles.header} id="scrolled">
        <p className={styles.title}>{props.title}</p>
        <div className={styles.grow}></div>
        <div>
          <div></div>
        </div>
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

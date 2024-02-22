/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-22 22:04:52
 * @Description: 简介
 */
"use client";
import React, { useEffect } from "react";
import styles from "../components/Head.module.css";
import { Component } from 'react';
import ThemeSwitcher from "./ui/ThemeSwitch";
import headerClasses from "././Main";
import ReactDOM from 'react-dom';
import { title } from "process";
import { getData } from "../components/base/Node";

export default async function Head(props) {
  // const view = props.posts["0"];
  //   useEffect(() => {
  //     const but = document.querySelector(".land");
  //     but.addEventListener("click", () => {
  //       but.classList.add("haha");
  //     });
  //   });


  const btn = () => {
    // console.log(document.getElementById("land").classList.contains("haha"))

    if (document.getElementById("land").classList.contains("haha")) {
      document.getElementById("land").classList.remove("haha");
    } else {
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
        <p className={styles.title}>{props.title}</p>
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

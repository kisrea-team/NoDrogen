/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-04
 * @LastEditors: vhko
 * @LastEditTime: 2024-05-12 14:33:56
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./Head.module.css";
import style from "./ui.module.css";
import ThemeSwitcher from "./ThemeSwitch";
import Dropdown from "./Dropdown";
// import Timeline from "./ui/timeline";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Head(props) {
  const btn = () => {
    if (document.getElementById("land").classList.contains("menu")) {
      document.getElementById("land").classList.remove("menu");
    } else {
      document.getElementById("land").classList.add("menu");
    }
  };

  return (
    <header className={styles.header} id="scrolled">
      <div className={`${styles.ske_title} `}>
        {props.icon?.startsWith("h") ? (
          <img src={props.icon} alt="emoji" height="30" width="30" />
        ) : (
          props.icon || <Skeleton />
        )}
        {props.title}
      </div>
      <div className={styles.grow}></div>
      <div className={`${style.menu} relative`}>
        <div>
          <a href="/achieve">
            <button className={style.type_btn}>
              <p>归档</p>
              {/* <FaAngleDown /> */}
            </button>
          </a>
        </div>
        <div>
          <button className={style.type_btn}>
            <p>分类1</p>
          </button>
        </div>
      </div>
      <div className={styles.grow}></div>
      <div className={styles.right}>
        <ThemeSwitcher />
      </div>
      <div className={styles.btn_menu} onClick={btn}></div>
    </header>
  );
}

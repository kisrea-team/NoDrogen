/*
 * @Author: vhko
 * @Date: 2024-01-30 23:04:00
 * @LastEditors: vhko
 * @LastEditTime: 2024-03-10 14:10:04
 * @FilePath: \NoDrogen\components\Head.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: vhko
 * @LastEditTime: 2024-03-09 18:16:05
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";
import styles from "../components/Head.module.css";
import ThemeSwitcher from "./ui/ThemeSwitch";
import Dropdown from "./ui/Dropdown";
import Timeline from "./ui/timeline";

export default async function Head(props) {
  const btn = () => {
    if (document.getElementById("land").classList.contains("haha")) {
      document.getElementById("land").classList.remove("haha");
    } else {
      document.getElementById("land").classList.add("haha");
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
        <div className="flex gap-5">
          <Dropdown title={props.title} />
          <p>
            <a href="/loading">时间线</a>
          </p>
        </div>
        <div className={styles.grow}></div>
        <div className={styles.right}>
          <ThemeSwitcher />
        </div>
        <div className={styles.btn_menu} onClick={btn}>
          <p></p>
        </div>
      </header>
    </>
  );
}

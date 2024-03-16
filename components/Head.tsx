/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: vhko
 * @LastEditTime: 2024-03-11 22:18:12
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
        <div>
          <Dropdown title={props.title} type={props.type} />
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

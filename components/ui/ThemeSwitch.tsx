/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: vhko
 * @LastEditTime: 2024-03-13 22:27:50
 * @Description: 简介
 */
"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import styles from "./ui.module.css";
import { useState } from "react";

import { MdLightMode, MdHdrAuto } from "react-icons/md";
import { HiMoon } from "react-icons/hi2";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  let isLightChecked = theme == "light";
  let isDarkChecked = theme == "dark";
  let isAutoChecked = theme == "system";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div>
        <div className={styles.tabs}>
          <input
            className={styles.input}
            type="radio"
            id="radio-1"
            name="tabs"
            onChange={() => setTheme("light")}
            checked={isLightChecked}
          />
          <label
            className={styles.tab}
            htmlFor="radio-1"
            data-hide-on-theme="light"
          >
            <MdLightMode className=" h-7 w-7" />
          </label>
          <input
            className={styles.input}
            type="radio"
            id="radio-2"
            name="tabs"
            onChange={() => setTheme("dark")}
            checked={isDarkChecked}
          />
          <label
            className={styles.tab}
            htmlFor="radio-2"
            data-hide-on-theme="dark"
          >
            <HiMoon className="h-7 w-7" />
          </label>
          <input
            className={styles.input}
            type="radio"
            id="radio-3"
            name="tabs"
            onChange={() => setTheme("system")}
            checked={isAutoChecked}
          />
          <label className={styles.tab} htmlFor="radio-3">
            <MdHdrAuto className="h-7 w-7" />
          </label>
          <span className={styles.glider}></span>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitch;

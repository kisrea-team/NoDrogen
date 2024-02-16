/*
 * @Author: zitons
 * @Date: 2024-02-16 14:41:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-16 15:33:08
 * @Description: 简介
 */
"use client"
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import styles from "../ui/ThemeSwitcher.module.css";
import { useMedia } from 'react-use'
import { useState } from 'react'



const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeSwitch
// }
// export default async function ThemeSwitcher() {
//   // const { theme, setTheme } = useTheme();
//   // let isLightChecked = theme == "light" ? "checked" : null;
//   // let isDarkChecked = theme == "dark" ? "checked" : null;
//   // let isAutoChecked = theme == "system" ? "checked" : null;
//   const prefersDark = useMedia('(prefers-color-scheme: dark)', null)
//   console.log(prefersDark)
//   return (
//     <div>
//       <div className={styles.tabs}>
//         <input
//           className={styles.input}
//           type="radio"
//           id="radio-1"
//           name="tabs"
//           // onChange={() => setTheme("light")}
//           // checked={isLightChecked}
//         />
//         <label className={styles.tab} htmlFor="radio-1">
//           Light
//         </label>
//         <input
//           className={styles.input}
//           type="radio"
//           id="radio-2"
//           name="tabs"
//           // onChange={() => setTheme("dark")}
//           // checked={isDarkChecked}
//         />
//         <label className={styles.tab} htmlFor="radio-2">
//           Dark
//         </label>
//         <input
//           className={styles.input}
//           type="radio"
//           id="radio-3"
//           name="tabs"
//           // onChange={() => setTheme("system")}
//           // checked={isAutoChecked}
//         />
//         <label className={styles.tab} htmlFor="radio-3">
//           Auto
//         </label>
//         <span className={styles.glider}></span>
//       </div>
//     </div>
//   );
// };
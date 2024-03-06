/*
 * @Author: vhko
 * @Date: 2024-03-02 09:29:04
 * @LastEditors: vhko
 * @LastEditTime: 2024-03-06 23:52:36
 * @FilePath: \NoDrogen\components\ui\Dropdown.tsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import { useState, useRef, useEffect } from "react";

import style from "./ui.module.css";

import { FaAngleDown } from "react-icons/fa6";

export default async function Dropdown(props) {
  const type = ["瞎写", "编程", "吐槽", "666"];
  const aaa = () => {
    if (document.getElementById("menu").classList.contains("aaa")) {
      document.getElementById("menu").classList.remove("aaa");
    } else {
      document.getElementById("menu").classList.add("aaa");
    }
  };
  const typelist = type.map((abc) => (
    <div>
      <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
        role="menuitem"
      >
        {abc}
      </a>
    </div>
  ));
  return (
    <div className="relative">
      <button onClick={aaa} className={style.type_btn}>
        <a href="#" className="">
          分类
        </a>
        <span className="sr-only"></span>
        <FaAngleDown />
      </button>
      <div
        id="menu"
        className={`${style.type_menu} hidden absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg`}
        role="menu"
      >
        <div className="p-2">{typelist}</div>
      </div>
    </div>
  );
}

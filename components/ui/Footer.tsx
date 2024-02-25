/*
 * @Author: zitons
 * @Date: 2024-02-11 14:16:43
 * @LastEditors: vhko
 * @LastEditTime: 2024-02-25 23:24:03
 * @Description: 简介
 */
import * as React from "react";
export default async function Footer(props) {
  return (
    <footer
      className={`flex text-gray-400 w-full m-auto p-2 flex-row justify-between items-center`}
    >
      <div className="text-gray-400 text-base">
        Nodrogen © 2024 By
        <a href={process.env.BLOG} target="_blank">
          <span className="text-gray-400 text-base">&nbsp;{props.name}</span>
        </a>
      </div>
    </footer>
  );
}

/*
 * @Author: zitons
 * @Date: 2024-02-20 10:39:14
 * @LastEditors: vhko
 * @LastEditTime: 2024-05-12 14:29:45
 * @Description: 简介
 */
"use client";
import React, { useEffect, useState } from "react";

export default function Main({ children }: { children: React.ReactNode }) {

   let oldScrollY = 0;

   const [direction, setDirection] = useState("up");
   const [y, setY] = useState(0);
   const controlDirection = () => {
      if (window.scrollY > oldScrollY) {
         setDirection("down");
      } else {
         setDirection("up");
      }
      oldScrollY = window.scrollY;
      setY(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener("scroll", controlDirection);
      return () => {
         window.removeEventListener("scroll", controlDirection);
      };
   }, []);

   useEffect(() => {
      if (y > 40) {
         document.getElementById("scrolled").classList.add("head");
         document.getElementById("acc").classList.add("acc");
      } else {
         document.getElementById("scrolled").classList.remove("head");
         document.getElementById("acc").classList.remove("acc");
      }
   }, [direction, y]);
   return <>{children}</>;
}
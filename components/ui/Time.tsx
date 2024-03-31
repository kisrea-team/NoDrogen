'use client'
import { useEffect, useState } from "react";
export default function Time() {
   const [time, setTime] = useState<string>();
   useEffect(() => {
      const hour = new Date().getHours();
      var get =
         hour > 19
            ? "晚上好🌃"
            : hour > 17
               ? "傍晚好🌇"
               : hour > 12
                  ? "下午好🍵"
                  : hour > 11
                     ? "中午好🍞"
                     : hour > 8
                        ? " 早上好🌅"
                        : hour > 2
                           ? "记得早点睡觉"
                           : "好";
      setTime(get);
   }, []);
   return (
      <p className="time">{time ? time : ""}</p>
   )
}
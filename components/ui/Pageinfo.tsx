/*
 * @Author: zitons
 * @Date: 2024-02-21 09:19:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-16 15:15:44
 * @Description: 简介
 */
import Image from "next/image";
import { HiMiniClock, HiMiniUserCircle } from "react-icons/hi2";

import Style from "./ui.module.css";
const Pageinfo = (props) => {
  return (
    <div className={`${Style.pageinfo} container mt-6`}>
      <div className={Style.cover}>
        <Image
          className={Style.img}
          src={props.data?.cover}
          alt="cover"
          fill={true}
        />
      </div>
      <div className="z-10">
        <div style={{ marginLeft: "-5px" }}>
          {props.data.tags.map((item) => (
            <span
              className={`tags rounded-md leading-8 m-1 notion-${item.color}_background`}
            >
              {item.name}
            </span>
          ))}
          <span>&#35;{props.data?.type}</span>
        </div>
        <div className={Style.title}>
          <p>
            {props.data?.icon}
            {props.title}&nbsp;
          </p>
          <span>&#35;{props.data?.type}</span>
        </div>

        <div>
          <p>{props.data?.summary}</p>
          <div className="flex gap-4">
            <p className={Style.meta}>
              <HiMiniUserCircle />
              {props.data?.Person?.[0]?.name}
            </p>
            <p className={Style.meta}>
              <HiMiniClock />
              {props.data.date?.["start_date"]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pageinfo;

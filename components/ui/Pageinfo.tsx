/*
 * @Author: zitons
 * @Date: 2024-02-21 09:19:46
 * @LastEditors: vhko hirsch-k@outlook.com
 * @LastEditTime: 2024-02-24 14:06:44
 * @Description: 简介
 */
import Image from "next/image";
import { HiMiniClock, HiMiniUserCircle } from "react-icons/hi2";

import Style from "./Pageinfo.module.css";
// import { ST } from "next/dist/shared/lib/utils";
const Pageinfo = (props) => {
  return (
    <div className={`${Style.pageinfo} container mt-6`}>
      <div style={{ width: "100px" }}>
        <Image
          className={Style.img}
          src={props.data?.cover}
          alt="cover"
          fill={true}
          //  width={300}
          //  height={200}
        />
      </div>
      <div>
        <div>
          {props.data.tags.map((item) => (
            <span
              className={`tags rounded-md leading-8 m-1 notion-${item.color}_background`}
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className={Style.title}>
          <p>{props.title}&nbsp;</p>
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
              {props.data.date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pageinfo;

/*
 * @Author: zitons
 * @Date: 2024-02-14 14:40:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-20 10:45:55
 * @Description: 简介
 */

import Styles from "./PageHeader.module.css";
import ThemeSwitcher from "./ThemeSwitch";

export default async function PageHeader(props) {
  // const tagsitem = props.data.tags?.map((tag) => (
  //   <span
  //     className={`${styles.tags} rounded-md leading-8 m-1 notion-${tag.color}_background`}
  //   >
  //     {tag.name}
  //   </span>
  // ));
  console.log(props.data);
  return (
    <>
      <header className={Styles.header}>
        <p>
          {props.mainTitle} {props.title} {props.data?.summary} <br /> 发布于 {props.data.date}{" "}
          <br />
          {props.data?.Person?.[0]?.name}
          {/* {props.data?.["0"]["name"]} */}
        </p>

        {props.data.tags.map((item) => (
          <div>
            <span
              className={`${Styles.tags} rounded-md leading-8 m-1 notion-${item.color}_background`}
            >
              {item.name}
            </span>
          </div>
        ))}
        <div className="flex-grow"></div>
        <ThemeSwitcher />
      </header>
    </>
  );
}

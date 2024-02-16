/*
 * @Author: zitons
 * @Date: 2024-02-14 14:40:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-16 17:52:19
 * @Description: 简介
 */
import styles from "../../components/list.module.css";
import Styles from "./PageHeader.module.css";
import ThemeSwitcher from "./Dark";
export default async function PageHeader(props) {
  // const tagsitem = props.data.tags?.map((tag) => (
  //   <span
  //     className={`${styles.tags} rounded-md leading-8 m-1 notion-${tag.color}_background`}
  //   >
  //     {tag.name}
  //   </span>
  // ));
  return (
    <>
      <header className={Styles.header}>
        <ThemeSwitcher/>
        <p>
          {props.title} {props.data?.summary} <br/> 发布于 {props.data.date} <br/>
          {props.data?.Person?.[0]?.name}
        </p>
        
        {props.data.tags.map((item) => (
          <span
            className={`${styles.tags} rounded-md leading-8 m-1 notion-${item.color}_background`}
          >
            {item.name}
          </span>
        ))}
        <span
        //  className={`${Styles.tags} rounded-md leading-8 m-1 notion-${tags.color}_background`}
        ></span>
      </header>
    </>
  );
}

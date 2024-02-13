/*
 * @Author: zitons
 * @Date: 2024-02-11 14:16:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-11 17:40:14
 * @Description: 简介
 */
import * as React from "react";

import { setDataToCache, getDataFromCache } from "../../lib/cache";
import {
  FaEnvelopeOpenText,
  FaGithub,
  FaLinkedin,
  FaMastodon,
  FaTwitter,
  FaYoutube,
  FaZhihu,
} from "react-icons/fa";
import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";
// import * as config from '@/lib/config'
import styles from "../../components/ui/styles.module.css";
export default async function Footer(props) {
  // headersList.get('host'); // to get domain

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_text}>
        Nodrogen © 2024 By
        <a
          href={process.env.BLOG}
          target="_blank"
          className={styles.footer_text}
        >
          <span className={styles.footer_text}> {props.name}</span>
        </a>
      </div>
    </footer>
  );
}

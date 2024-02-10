import * as React from "react";
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
import styles from "../../components/ui/Styles.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_text}>
        Nodrogen © 2024 By
        <a
          href={process.env.BLOG}
          target="_blank"
          className={styles.footer_text}
        >
          <span className={styles.footer_text}>{process.env.NAME}</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

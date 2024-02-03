import * as React from 'react'
import { FaEnvelopeOpenText, FaGithub, FaLinkedin, FaMastodon, FaTwitter, FaYoutube, FaZhihu } from "react-icons/fa";
import { IoMoonSharp, IoSunnyOutline } from "react-icons/io5";
// import * as config from '@/lib/config'
import styles from '../components/ui/styles.module.css'

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.nodrogen}>基于 Nodrogen 开源项目</div>
      <div className={styles.settings}></div>
      <div className={styles.social}>
        <a
          className={styles.twitter}
          href={`https://twitter.com/` + process.env.X}
          title={`Twitter`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
        </a>
        <a
          className={styles.mastodon}
          href=""
          title={`Mastodon}`}
          rel='me'
        >
          <FaMastodon />
        </a>
        <a
          className={styles.zhihu}
          href={`https://zhihu.com/people/` + process.env.ZHIHU}
          title={`Zhihu`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaZhihu />
        </a>
        <a
          className={styles.github}
          href={`https://github.com/` + process.env.GITHUB}
          title={`GitHub`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <a
          className={styles.linkedin}
          href={`https://www.linkedin.com/in/`}
          title={`LinkedIn`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
        </a>
        <a
          className={styles.newsletter}
          href=""
          title={`Newsletter `}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaEnvelopeOpenText />
        </a>
        <a
          className={styles.youtube}
          href={`https://www.youtube.com/`}
          title={`YouTube`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)

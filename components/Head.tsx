import { getAllPosts } from '../lib/notion/getData'
import { setDataToCache, getDataFromCache } from '../lib/cache'
import styles from '../components/Head.module.css'



export default async function Head() {
   let posts


   if (await getDataFromCache("posts") == null) {
      posts = await getAllPosts(0, 0, 0)
      await setDataToCache("posts", posts)
      console.log("no")
   }
   else {
      posts = await getDataFromCache("posts")
      console.log('yes')
   }
   return (
      <div className={styles.header}>
         <title>{posts['0']['name']}</title>
         <div className={styles.head}>
            <p className={styles.title}>{posts['0']['name']}</p>
            <p className={styles.grow}></p>
            <div id={styles.btn_menu} className={styles.btn_menu}></div>
         </div>
         <div className={styles.bar}>
            <p className={styles.bar_text}>欲速则不达</p>

         </div>
         
      </div>
   )
}

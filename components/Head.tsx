import { getAllPosts } from '../lib/notion/getData'
import styles from '../components/Head.module.css'


export default async function Head() {
   const posts = await getAllPosts(0, 0)

   return (
      <div>
         <div className='flex pt-4 select-none'>
            <p className='text-2xl font-bold'>{posts['0']['name']}</p>
            <p className='grow'></p>
            <div id='btn-menu' className='btn-menu'></div>
         </div>
         <div className={styles.bar}>
            <p className={styles.bar_text}>欲速则不达</p>
         </div>
      </div>
   )
}

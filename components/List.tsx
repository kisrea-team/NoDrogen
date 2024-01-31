import Image from 'next/image'
import { getAllPosts } from '../lib/notion/getData'
import { getAllTagsFromPosts } from '../lib/notion/getAllTagsFromPosts'
import { setDataToCache, getDataFromCache } from '../lib/cache'
import { paginate } from '../lib/notion/getData'

import styles from '../components/list.module.css'

import Time from './ui/Time'
import Pagination from './ui/Pagination'

export default async function List(props) {
   let posts


   if (await getDataFromCache("posts") == null) {
      posts = await getAllPosts(0, 0, 0)
      await setDataToCache("posts", posts)
      console.log("N")
   }
   else {
      posts = await getDataFromCache("posts")
      console.log('Y')
   }
   const view = posts[0];
   posts = posts.slice(1);

   const tags = await getAllTagsFromPosts(posts)
   const star = await getAllPosts(1, posts, "精选")
   posts = posts.filter(post => {
      return post?.type?.[0] != "精选";
   })
   // const [value] = useState("精选");
   //posts.shift()
   
   const postsp = paginate(star.concat(posts), Number(props.currentPage), 10);
   console.log("page:" + props.currentPage)

   const listItems = postsp.map((list) =>
      <a className={styles.posts_item} href={"/blog/"+list.id} target='_blank'>
         <div className={styles.posts_heart}>
            {list.type == "精选" ?
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" version="1.1" width="16.000003814697266" height="22.30051803588867" viewBox="0 0 35.000003814697266 47.30051803588867">
                  <path d="M0,45.9367L0,0L35,0L35,45.9367C35,47.1162,33.6172,47.7374,32.7517,46.9469L18.4022,33.8438C17.8898,33.3758,17.1102,33.3758,16.5978,33.8438L2.2484,46.9469C1.38265,47.7374,0,47.1162,0,45.9367Z" fill="#838383" fill-opacity="0.27000001072883606" /> </svg>
               : <span></span>}

         </div>
         <div className={styles.posts_cover}>
            <Image
               className={styles.cover}
               src={list.cover}
               alt='cover'
               fill={true}
            />
         </div>
         <div className={styles.posts_info}>
            <span className={styles.icon}>{list.icon}</span>
            <div className={styles.posts_secondary}>
               <p className={styles.posts_title}>
                  {list.title}
               </p>
               <p className={styles.date}>{list.date}</p>
               <p>{list.summary}</p>
               <div className={styles.post_tags}>
                  {list.tags?.map((item) => (
                     <span className={`${styles.tags} rounded-md leading-8 m-1 notion-${item.color}_background`}>
                        {item.name}
                     </span>
                  ))}
               </div>
            </div>
         </div>
      </a>);
   const tagsitem = tags?.map((tag) => (
      <span className={`${styles.tags} rounded-md leading-8 m-1 notion-${tag.color}_background`}>
         {tag.name}
      </span>
   ));
   return (
      <div>
         <div className={`${styles.list_container}`}>
            <div className={styles.list_items}>
               {listItems}
               <div className="mt-5 flex w-full justify-center">
                  {/* <Pagination totalPages={1} /> */}
                  <Pagination
                     items={posts.length} // 100
                     currentPage={props.currentPage} // 1
                     pageSize={10} // 10
                     onPageChange={1} />
               </div>
            </div>
            <aside className={styles.sticky}>
               <div className={styles.auther_card}>
                  <Time />
                  <div className={styles.auther_info}>
                     <div className={styles.auther_name}>
                        <p>
                           {view?.['user']?.[0]?.[0]?.name}
                        </p>
                     </div>
                     <div className={styles.auther_avatar}>
                        <Image
                           src={view?.['user']?.[0]?.[0]?.profile_photo}
                           width={100}
                           height={100}
                           alt='牛' />
                     </div>
                     <p>{view.description}</p>
                  </div>
               </div>
               <div className={styles.tags_card}>
                  <h1 className={styles.title}>标签</h1>
                  <div className={styles.tags_item}>
                     {tagsitem}
                  </div>
               </div>
            </aside>
         </div>
      </div>
   )

}

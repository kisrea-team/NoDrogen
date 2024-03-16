import Image from "next/image";
import { searchsFromPosts } from "../lib/notion/getData";
import { getAllTagsFromPosts } from "../lib/notion/getAllTagsFromPosts";
import { paginate } from "../lib/notion/getData";
import styles from "../components/Home.module.css";
import Footer from "./ui/Footer";
import Time from "./ui/Time";
import Pagination from "./ui/Pagination";
import { getData } from "../components/base/Node";

import { MdBookmark } from "react-icons/md";
// import { search } from "../lib/notion";

// async function getData() {
//   const res = await fetch(process.env.NEXT_PUBLIC_BLOG+"api")

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }
export default async function List(props) {
  let d;
  d = await getData("api"+props.api);
  const view = d.wiki;
  console.log(props)
  const tags = await getAllTagsFromPosts(d.posts);
  const star = await searchsFromPosts(d.posts, "精选");
  d.posts = d.posts.filter((post) => {
    return post?.type?.[0] != "精选";
  });

  const postsp = paginate(star.concat(d.posts), Number(props.currentPage), 10);
  console.log("page:" + props.currentPage);
  const ListItems = postsp.map((list) => (
    <a className={styles.posts_item} href={"/blog/" + list.id} target="_blank">
      <div className={styles.posts_heart}>
        {list.type == "精选" ? (
          <MdBookmark className=" w-full h-full" />
        ) : (
          <span></span>
        )}
      </div>
      <div className={styles.posts_cover}>
        <Image
          className={styles.cover}
          src={list.cover}
          alt="cover"
          fill={true}
        />
        {/* <div className={styles.time_down}>
          <p>test</p>
        </div> */}
      </div>
      <div className={styles.posts_info}>
        <div className={styles.posts_secondary}>
          <p className={styles.posts_title}>
            {list.icon}
            {list.title}
          </p>
          <div className={styles.posts_wrapper}>
            <p className={styles.date}>
              {list.type}|{list.date}
            </p>
            {/* <p className={styles.date}>{list.start_date}</p> */}
            {/* <p>{list.type}</p> */}
            <p>{list.summary}</p>
            <div className={styles.post_tags}>
              {list.tags?.map((item) => (
                <span
                  className={`${styles.tags} rounded-md m-1 notion-${item.color}_background`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  ));
  const tagsitem = tags.map((tag) => (
    <span
      className={`${styles.tags} rounded-md m-1 notion-${tag.color}_background`}
    >
      {tag.name}
    </span>
  ));

  return (
    <>
      <div className={styles.land} id="land">
        <p>sadasd</p>
      </div>
      <div className={`${styles.container}`}>
        <div className={styles.bar}>
          <p className={styles.bar_text}>{view?.description}</p>
        </div>
        <div className={styles.layout}>
          <div className={styles.list_items}>
            {ListItems}
            <div className="mt-5 flex w-full justify-center">
              <Pagination
                items={d.posts.length} // 100
                currentPage={props.currentPage} // 1
                pageSize={10} // 10
                onPageChange={1}
                api={props.api}
              />
            </div>
          </div>
          <aside className={styles.sticky}>
            <div className={styles.auther_card}>
              <Time />
              <div className={styles.auther_info}>
                <div className={styles.auther_name}>
                  <p>{view?.["user"]?.[0]?.[0]?.name}</p>
                </div>
                <div className={styles.auther_avatar}>
                  <Image
                    src={view?.["user"]?.[0]?.[0]?.profile_photo}
                    width={100}
                    height={100}
                    alt="牛"
                  />
                </div>
                <p>{view.description}</p>
              </div>
            </div>
            <div className={styles.tags_card}>
              <h1 className={styles.title}>标签</h1>
              <div className={styles.tags_item}>{tagsitem}</div>
            </div>
          </aside>
        </div>
      </div>
      <Footer name={view?.["user"]?.[0]?.[0]?.name} />
    </>
  );
}

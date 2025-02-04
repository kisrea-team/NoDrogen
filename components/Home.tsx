import Image from "next/image";
import styles from "../components/Home.module.css";
import Footer from "./ui/Footer";
import Time from "./ui/Time";
// import Timeline from "./ui/timeline";
import Pagination from "./ui/Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import TextLoop from "react-text-loop";
// import Link from "react-router-dom";
// import { BodyText } from "./ui";

async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
import { MdBookmark } from "react-icons/md";
export default async function List(props: any) {
  let nData;
  nData = props.data;
  const view = nData.wiki;
  // await delay(300000);

  console.log("page:" + props.currentPage);
  const ListItems = nData.posts.map((list: any) => (
    <a
      // key={list.id}
      className={styles.posts_item}
      href={"/blog/" + list.id}
      target="_blank"
    >
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
            {list?.icon?.startsWith("h") ? (
              <img src={list.icon} alt="emoji" height="30" width="30" />
            ) : (
              list.icon
            )}
            <span>{list.title}</span>
          </p>
          <div>
            <p className={styles.date}>
              {list.type}|{list.date?.["start_date"]}
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
  //////////
  const tagsitem = nData.tags.map((tag) => (
    <span
      className={`${styles.tags} rounded-md m-1 notion-${tag.color}_background`}
    >
      {tag.value}
    </span>
  ));

  return (
    <>
      <div className={styles.land}>
        <p>aaabbb</p>
      </div>
      <div className={styles.post_wrapper}>
        {/* <div className={styles.bar}>
          <p className={styles.bar_text}>{view?.description}</p>
        </div> */}
        <div className={styles.layout}>
          <div className={styles.list_items}>
            {ListItems}
            <div className="mt-5 flex w-full justify-center">
              <Pagination
                pageNumber={nData.page_number} // 100
                currentPage={props.currentPage} // 1
                pageSize={10} // 10
                onPageChange={1}
                api={props.api}
              />
            </div>
          </div>
          <aside className={styles.sticky}>
            <div className={styles.user_card}>
              <Time />
              <div className={styles.user_info}>
                <div className={styles.user_avatar}>
                  <Image
                    src={nData.main_user[0]?.profile_photo}
                    width={100}
                    height={100}
                    alt="牛"
                  />
                  <div className={styles.user_name}>
                    <p>{nData.main_user[0]?.name}</p>
                  </div>
                </div>
                <p>{view.description}</p>
              </div>
            </div>
            <div className={styles.tags_card}>
              <h1 className={styles.title}>标签</h1>
              <a href="./Timeline">abc</a>
              <div className={styles.tags_item}>{tagsitem}</div>
            </div>
          </aside>
        </div>
      </div>
      <Footer name={nData.main_user[0]?.name} />
    </>
  );
}

/*
 * @Author: zitons
 * @Date: 2024-02-11 14:16:42
 * @LastEditors: vhko
 * @LastEditTime: 2025-02-04
 * @Description: 简介
 */
/* _  __  _
 *| |/ / (_)  ___   _ __    ___    __ _
 *| ' /  | | / __| | '__|  / _ \  / _` |
 *| . \  | | \__ \ | |    |  __/ | (_| |
 *|_|\_\ |_| |___/ |_|     \___|  \__,_|
 */
//  "use client";
import { Suspense } from "react";
import "../globals.css";
import Head from "../../components/ui/Head";
import Main from "../../components/Main";
import SenderMain from "../../components/base/Sender";
import styles from "../../components/Home.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default async function Page({ params: { slug } }) {
  let data = [1, 2, 3, 4, 5, 6];
  const postList = data.map(() => {
    return (
      <a className={styles.ske_postitem} target="_blank">
        {/* <div className={styles.posts_heart}></div> */}
        <div className={styles.ske_cover}>
          <Skeleton className="h-full" />
        </div>
        <div className={styles.ske_secondary}>
          {/* <div> */}
          <p className={styles.ske_1}>
            <Skeleton height={20} inline={false} />
          </p>
          <p className={styles.ske_2}>
            <Skeleton height={20} />
          </p>
          <p className={styles.ske_3}>
            <Skeleton height={20} />
          </p>
          {/* </div> */}
        </div>
      </a>
    );
  });
  return (
    <main>
      <Suspense
        fallback={
          <>
            <Head type="文章">{/* <Skeleton /> */}</Head>
            <div className="container mx-auto">
              <Main>
                <div className={styles.post_wrapper}>
                  <div className={styles.layout}>
                    <div className={styles.list_items}>{postList}</div>
                    {/* 这里是文章加载时的样式 */}
                    <aside className={styles.sticky}>
                      <div className={styles.user_card}>
                        <div className={styles.ske_info}>
                          <Skeleton containerClassName={styles.info1} />
                          <Skeleton />
                        </div>
                        <div>
                          <div
                            className={`${styles.user_avatar} ${styles.ske_username}`}
                          >
                            <Skeleton circle width={100} height={100} />
                            <p>
                              <Skeleton />
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* tag_card */}
                      <div className={styles.tags_card}>
                        <h1 className={styles.title}>
                          <Skeleton />
                        </h1>
                        <div>
                          <Skeleton count={3} />
                        </div>
                      </div>
                    </aside>
                  </div>
                </div>
              </Main>
            </div>
          </>
        }
      >
        <SenderMain slug={slug} />
      </Suspense>
    </main>
  );
}

// export async function generateMetadata() {
//   let icon;
//   const d = await getData("api/wiki");
//   icon = d.wiki["icon"];
//   if (icon.startsWith("http") <= 0) {
//     icon =
//       "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
//       icon +
//       "</text></svg>";
//   }
//   return {
//     title: d.wiki["name"],
//     icons: icon,
//     description: d.wiki["description"],
//   };
// }

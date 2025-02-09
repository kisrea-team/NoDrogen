/*
 * @Author: zitons
 * @Date: 2024-02-05 16:18:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-16 20:15:51
 * @Description: 简介
 */
//import * as React from 'react'
import { Suspense } from "react";
// import { NotionPage } from "../../../components/NotionPage";
import SenderBlog from "../../../components/base/Sender2";
// import "../../../components/styles.module.css"
import PageMain from "../../../components/PageMain";

// import Head from "../Head";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Style from "../../../components/ui/ui.module.css";
export default async function Page({ params }) {
  const { slug } = await params;
  // const d = await getData("api/content/" + slug);
  // // console.log(recordMap)
  // // console.log(d.wiki["type"])
  // if (!d.data.title) {
  //   return;
  // }

  return (
    <>
      <Suspense
        fallback={
          <>
            <body>
              {/* <PageHead type={"精选"} /> */}
              {/* <Head /> */}

              <div className={`${Style.pageinfo} container`}>
                <div className={Style.cover}>
                </div>
                <div className={Style.pagetext}>
                  <div style={{ marginLeft: "-5px" }}>

                  </div>
                  <div className={Style.title}>

                    <p>

                      <Skeleton width={60} height={24} />
                      <Skeleton circle width={36} height={36} />


                    </p>
                    <span>&nbsp;#&nbsp;<Skeleton width={60} height={24} /></span>
                  </div>

                  <div>
                    {/* <p>{props.data?.summary}</p> */}
                    <div className="flex gap-4">
                      {/* <p className={Style.meta}>
                        <HiMiniUserCircle />
                        {props.data?.Person?.[0]?.name}
                     </p> */}
                      <p className={Style.meta}>
                        {/* <HiMiniClock /> */}
                        <Skeleton />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full md:w-3/5 p-4">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 rounded-lg w-full">
                    <p className="leading-relaxed">
                      <Skeleton count={20} />
                    </p>
                  </div>

                </div>
              </div>









              {/* <Footer name={"name"} /> */}

            </body>
          </>
        }
      >


        <SenderBlog slug={slug} />
      </Suspense >
    </>
  );

}
// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const d = await getData("api/content/" + slug);
//   let icon;
//   if (d.data["icon"]) {
//     if (d.data["icon"].startsWith("http") <= 0) {
//       icon =
//         "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
//         d.data["icon"] +
//         "</text></svg>";
//     }
//   } else {
//     icon =
//       "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
//       "🛩️" +
//       "</text></svg>";
//   }
//   return {
//     title: d.data["title"],
//     icons: icon,
//     description: String(d.data["description"]),
//   };
// }

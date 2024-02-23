/*
 * @Author: zitons
 * @Date: 2024-02-11 14:16:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-02-23 18:12:27
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
import { lazy } from "react";
// import Main from "../../components/Main";
// import Head from "../../components/Head";
import List from "../../components/Home";
import { Loading } from "../../components/Loading";
import dynamic from "next/dynamic";
import { title } from "process";
import Head from "../../components/Head";
import { getData } from "../../components/base/Node";

export async function generateStaticParams() {
  const d = await getData("api");
  return d.pageNumber
}
export default async function Page({ params }) {
  const { slug } = params;
  // const List = lazy(() => import("../../components/List"));
  // const Head = lazy(() => import("../../components/Head"));
  // const Dark = lazy(() => import("../../components/ui/Dark"));
  const Main = dynamic(() => import("../../components/Main"), { ssr: false });
  // const Head = dynamic(() => import("../../components/Head"), { ssr: false });

  const d = await getData("api");


  return (
    <main>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Head title={d.wiki["name"]}/>
        <div className="container mx-auto">
          <Main>
            <List currentPage={slug || 1} />
          </Main>
        </div>
        {/* <p>第{slug || 1}页</p> */}
        {/* <Footer /> */}
        {/* <Dark/> */}
      </Suspense>
    </main>
  );
}

export async function generateMetadata() {
  let icon;
  const d = await getData("api");
  icon = d.wiki['icon']
  if (icon.startsWith("http") <= 0) {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      icon +
      "</text></svg>";
  }
  return {
    title: d.wiki["name"],
    icons: icon,
    description: d.wiki["description"],
  };
}

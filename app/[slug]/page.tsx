/*
 * @Author: zitons
 * @Date: 2024-02-11 14:16:42
 * @LastEditors: vhko
 * @LastEditTime: 2024-04-03 20:55:58
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
import Home from "../../components/Home";
import { Loading } from "../../components/Loading";
import dynamic from "next/dynamic";
import Head from "../../components/ui/Head";
import { getData } from "../../components/base/Node";

export default async function Page({ params }) {
  const { slug } = params;
  const Main = dynamic(() => import("../../components/Main"), { ssr: false });
  const d = await getData("api/post/" + slug);

  return (
    <main>
      <Suspense
        fallback={
          <div>
            <Loading />
          </div>
        }
      >
        <Head title={d.wiki["name"]} type={d.wiki["type"]} />
        <div className="container mx-auto">
          <Main>
            <Home currentPage={slug || 1} data={d} api={""} />
          </Main>
        </div>
      </Suspense>
    </main>
  );
}

export async function generateMetadata() {
  let icon;
  const d = await getData("api/wiki");
  icon = d.wiki["icon"];
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

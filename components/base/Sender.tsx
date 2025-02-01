/*
 * @Author: zitons
 * @Date: 2024-02-20 10:39:14
 * @LastEditors: vhko
 * @LastEditTime: 2024-07-20 21:01:27
 * @Description: 简介
 */
import Home from "../../components/Home";
import Head from "../../components/ui/Head";
import Main from "../../components/Main";
import { getData } from "../../components/base/Node";
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
export default async function SenderMain(props) {
  const d = await getData("api/post/" + props.slug);
  let icon = d.wiki["icon"];

  if (icon.startsWith("http") <= 0) {
    icon =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
      icon +
      "</text></svg>";
  }
  return (
    <>
      <head>
        <title>{d.wiki["name"]}</title>
        <link rel="icon" type="image/x-icon" href={icon}/>

      </head>
      <body>
        <Head
          title={d.wiki["name"]}
          type={d.wiki["type"]}
          icon={d.wiki["icon"]}
        />
        <div className="container mx-auto">
          <Main>
            <Home currentPage={props.slug || 1} data={d} api={""} />
          </Main>
        </div>
      </body>
    </>
  );
}

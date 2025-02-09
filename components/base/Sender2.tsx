import { NotionPage } from "../NotionPage";
import { getData } from "./Node";

export default async function SenderBlog(props) {
    const d = await getData("api/content/" + props.slug);
    // console.log(recordMap)
    // console.log(d.wiki["type"])
    if (!d.data.title) {
        return;
    }




    // let icon = d.data["icon"];

    // if (icon.startsWith("http") <= 0) {
    //     icon =
    //         "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" +
    //         icon +
    //         "</text></svg>";
    // }
    return (
        <>
            <head>
                <title>{d.data.title}</title>

            </head>
            <body>

                <main>
                    <NotionPage
                        recordMap={d.record_map}
                        title={d.data.title}
                        type={d.wiki["type"]}
                        data={d.data}
                    />
                </main>
            </body>

        </>
    );
}

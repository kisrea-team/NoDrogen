import Image from "next/image";
import { HiMiniClock, HiMiniUserCircle } from "react-icons/hi2";

import Style from "./pageinfo.module.css";
import { ST } from "next/dist/shared/lib/utils";
const Pageinfo = (props) => {
  return (
    <div className={`${Style.pageinfo} container mt-6`}>
      {/*<Image*/}
      {/*  className={Style.img}*/}
      {/*  src={props.data?.cover}*/}
      {/*  alt="cover"*/}
      {/*  fill={true}*/}
      {/*/>*/}
      <div className={Style.index}>
        <p>{props.data?.type}</p>
        <p className={Style.title}>{props.title}</p>
        <div>
          <p>{props.data?.summary}</p>
          <div className="flex gap-4">
            <p className={Style.meta}>
              <HiMiniUserCircle />
              {props.data?.Person?.[0]?.name}
            </p>
            <p className={Style.meta}>
              <HiMiniClock />
              {props.data.date}
            </p>
          </div>
        </div>
      </div>

      {props.data.tags.map((item) => (
        <div>
          <span
            className={`tags rounded-md leading-8 m-1 notion-${item.color}_background`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};
export default Pageinfo;

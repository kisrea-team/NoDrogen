import Styles from "./PageHeader.module.css";
export default async function PageHeader(props) {
   
  return (
    <>
      <header className={Styles.header}>
        <p>{props.title}</p>
        <span
         //  className={`${Styles.tags} rounded-md leading-8 m-1 notion-${tags.color}_background`}
        >
          {props.tags}
        </span>
      </header>
    </>
  );
}

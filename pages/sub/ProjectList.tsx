import React from "react";
import styles from "@/pages/sub/Sub.module.scss";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type ProjectProp = {
  img: any;
  title: string;
  content: any;
};
/* <ProjectList/> =========================================================== */
export default function ProjectList() {
  return (
    <>
     <div className={styles.main}>
     <section className={styles.pblsh}>
      </section>
     </div>
    </>;

  )
}
ProjectList.defaultProps = {};

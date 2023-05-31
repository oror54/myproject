import React from "react";
import styles from "@/pages/sub/Sub.module.scss";

import Image from "next/image";
import index from "..";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type ProjectProp = {
  image: any;
  title: string;
  client: string;
  date: any;
  skills: React.ReactNode;
};
/* <ProjectList/> =========================================================== */
export default function ProjectList() {
  const projectArray: ProjectProp[] = [
    {
      image: <Image src="/imgs/pblsh01.png" alt="오십견각도계" />,
      title: "오십견각도계",
      client: "클라이언트",
      date: <>2022. 03</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>photoshop </p>
          <p>illustrator</p>
        </>
      ),
    },
  ];

  const renderProjectAraay = (item: ProjectProp, index: number) => {
    return (
      <li className={styles.project} key={index}>
        <div className={styles.img}>{item.image}</div>
        <div className={styles.content}>
          {item.title}
          <ol className={styles.con_box}>
            <li className={styles.con}>
              <h3 className={styles.con_tit}>Client</h3>
              <div className={styles.con_txt}>{item.client}</div>
            </li>
            <li className={styles.con}>
              <h3 className={styles.con_tit}>Date</h3>
              <div className={styles.con_txt}>{item.date}</div>
            </li>
            <li className={styles.con}>
              <h3 className={styles.con_tit}>Skills</h3>
              <div className={styles.con_txt}>{item.skills} </div>
            </li>
          </ol>
        </div>
      </li>
    );
  };

  return (
    <main>
      <ul className={styles.pblsh}>{projectArray.map(renderProjectAraay)}</ul>
    </main>
  );
}

ProjectList.defaultProps = {};

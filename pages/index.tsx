import React from "react";
import styles from "@/styles/pages/index.module.scss";
import Image from "next/image";
import HTML from "@/public/imgs/skl01.svg";
import CSS from "@/public/imgs/skl02.svg";
import JS from "@/public/imgs/skl03.svg";
import Reactjs from "@/public/imgs/skl04.svg";
import Git from "@/public/imgs/skl05.svg";
import Adobe from "@/public/imgs/skl06.svg";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};

type SkillProp = {
  title: React.ReactNode;
  icon: any;
};
/* <index/> =========================================================== */
export default function index() {
  const skillArray: SkillProp[] = [
    { title: <p>HTML</p>, icon: HTML },
    { title: <p>CSS</p>, icon: CSS },
    {
      title: (
        <>
          <p>JavaScript</p>
          <p>jQuery</p>
        </>
      ),
      icon: JS,
    },
    { title: <p>React</p>, icon: Reactjs },
    { title: <p>Git</p>, icon: Git },
    {
      title: (
        <>
          <p>Photoshop</p>
          <p>Illustrator</p>
        </>
      ),
      icon: Adobe,
    },
  ];

  const renderSkillArray = (item: SkillProp, index: number) => {
    return (
      <div className={styles.skl} key={index}>
        <Image src={item.icon} alt="skill" width={100} height={100} />
        <div className={styles.skl_txt}>{item.title}</div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <section className={styles.sec0}></section>
      <section className={styles.sec1}>
        <div className={styles.tit}>
          <h2>About me</h2>
          <p>어쩌구저쩌구</p>
        </div>
        <div className={styles.box_wrap}>
          <h3>skills</h3>
          <div className={styles.skl_box}>
            {skillArray.map(renderSkillArray)}
          </div>
        </div>
      </section>
      <section className={styles.sec2}>
        <div className={styles.contact}>
          <Image
            src="/imgs/contact.png"
            width={700}
            height={700}
            alt="contact"
          />
          <div className={styles.con}>
            <h2>Contact</h2>
            <p>간단설명</p>
            <button>contact</button>
          </div>
        </div>
      </section>
    </div>
  );
}
index.defaultProps = {};

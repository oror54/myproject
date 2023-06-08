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
      image: (
        <>
          <Image
            src="/imgs/pblsh01.jpg"
            alt="오십견각도계"
            width={100}
            height={100}
          />
        </>
      ),
      title: "오십견각도계",
      client: "진심솔루션",
      date: <>2021. 11</>,
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
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh02.jpg"
            alt="솔루션"
            width={100}
            height={100}
          />
        </>
      ),
      title: "솔루션퍼블리싱",
      client: "반듯한컴퍼니",
      date: <>2021.12</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh03.jpg"
            alt="기술장인"
            width={100}
            height={100}
          />
        </>
      ),
      title: "기술장인",
      client: "(주)유성",
      date: <>2022. 01</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>photoshop </p>
          <p>illustrator</p>
          <p>Figma</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh04.jpg"
            alt="건물임대관리"
            width={100}
            height={100}
          />
        </>
      ),
      title: "건물임대관리",
      client: "스콥정보통신(주)",
      date: <>2022. 02</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>photoshop </p>
          <p>illustrator</p>
          <p>Figma</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh05.jpg"
            alt="장보고"
            width={100}
            height={100}
          />
        </>
      ),
      title: "장보고배송",
      client: "장보고식자재마트",
      date: <>2022. 03</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>photoshop </p>
          <p>illustrator</p>
          <p>Figma</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh06.jpg"
            alt="동네시대"
            width={100}
            height={100}
          />
        </>
      ),
      title: "동네시대",
      client: "반듯한컴퍼니",
      date: <>2022. 04</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Figma</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh07.jpg"
            alt="홀리데이"
            width={100}
            height={100}
          />
        </>
      ),
      title: "Holiday",
      client: "아틀란티스",
      date: <>2022. 05</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Figma</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh08.jpg"
            alt="케어플러스"
            width={100}
            height={100}
          />
        </>
      ),
      title: "케어플러스",
      client: "씨플러스",
      date: <>2022. 07</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>illustrator</p>
          <p>Figma</p>
        </>
      ),
    },
    {
      image: (
        <>
          <Image
            src="/imgs/pblsh09.jpg"
            alt="케어플러스"
            width={100}
            height={100}
          />
        </>
      ),
      title: "케어플러스",
      client: "씨플러스",
      date: <>2022. 07</>,
      skills: (
        <>
          <p> HTML </p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>illustrator</p>
          <p>Figma</p>
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

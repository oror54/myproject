import React from "react";
import styles from "./Header.module.scss";
import cx from "classnames";
import Link from "next/link";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Header/> =========================================================== */
export default function Header() {
  return (
    <>
      <header className={cx([styles.header, "header"])}>
        <div className={styles.header_wrap}>
          <h1>jihyeon</h1>
          <ul>
            <li className="act">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/sub">Project</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
Header.defaultProps = {};

import React from "react";
import styles from "./Header.module.scss";
import cx from "classnames";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Header/> =========================================================== */
export default function Header() {
  return (
    <header className={cx([styles.header, "header"])}>
      <div className={styles.header_wrap}>
        <h1>jihyeon</h1>
        <ul>
          <li className="act">
            <a href="./index.html">home</a>
          </li>
          <li>
            <a href="./sub.html">project</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
Header.defaultProps = {};

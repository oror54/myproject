import React from "react";
import styles from "./Footer.module.scss";
import cx from "classnames";
import Link from "next/link";
import Giticon from "@/public/imgs/foot-icon01.svg";
import Bitbucketicon from "@/public/imgs/foot-icon02.svg";
import Emailicon from "@/public/imgs/foot-icon03.svg";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Footer/> =========================================================== */
export default function Footer() {
  return (
    <footer>
      <div className={cx([styles.footer, "footer"])}>
        <div className={styles.foot_logo}>jihyeon</div>
        <div className={styles.foot_nav}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
          <p>© 2023 Hong jihyeon. All Rights Reserved.</p>
        </div>
        <div className={styles.foot_contact}>
          <ol>
            <li>
              <a href="#">
                <img src={Giticon} alt="git" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Bitbucketicon} alt="bitbucket" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={Emailicon} alt="email" />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </footer>
  );
}
Footer.defaultProps = {};

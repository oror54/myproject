import React from 'react';
import styles from '@/styles/Header.module.scss';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <Header/> =========================================================== */
export default function Header() {
  return (
    <div className={styles.header}>
      <header>Header</header>
    </div>
  );
}
Header.defaultProps = {};

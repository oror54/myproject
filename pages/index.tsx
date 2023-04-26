import React from 'react';
import Header from '@/components/common/Header';

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
/* <index/> =========================================================== */
export default function index() {
  return (
    <div>
      <Header />
      <h3>index</h3>
    </div>
  );
}
index.defaultProps = {};

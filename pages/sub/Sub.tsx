import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import Link from "next/link";
import ProjectList from ".";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};

/* <Sub> =========================================================== */
export default function Sub() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
Sub.defaultProps = {};

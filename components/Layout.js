import React from "react";
import styles from "../styles/Layout.module.css";
import Navbar from './Nav'
//
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}> {children}</main>
    </div>
  );
}

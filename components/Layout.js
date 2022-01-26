import React from "react";
import styles from "../styles/Layout.module.css";
//
export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <h1>Navbar here</h1>
      <main className={styles.main}> {children}</main>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iconic NextJS</title>
        <meta
          name="description"
          content="On-demand app and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Iconic</a>
          </h1>
          <div className={styles.card}>
            <a href="/about">
              <p>Go to about</p>
            </a>
          </div> 
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

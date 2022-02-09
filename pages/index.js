import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// https://dribbble.com/shots/15369006-HuntJobs-Job-Search-Dashboard

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
          <h1 className={styles.title}>Welcome to Iconic</h1>
          <div className={styles.card}>
            <Link href={"/domains"}>
              <p>Go to Domain Search</p>
            </Link>
          </div>
        </div>
        {/* Parallax */}
        <div
          className={styles.container}
          style={{
            border: "1px solid red",
            minWidth: "100%",
            // backgroundColor: "black",
          }}
        >
          <div className="wrapper">
            <div className="background-container">
              <Image
                // layout='fill'
                height={250}
                width={250}
                src="/public/moon.png"
                alt="Picture of the moon"
                className="background"
              />
              <Image
                // layout='fill'
                height={250}
                width={250}
                src="/public/clouds.png"
                alt="Picture of the clouds"
                className="foreground"
              />

              <h1 className="title">Welcome!</h1>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

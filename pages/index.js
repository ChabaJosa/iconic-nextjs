import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "semantic-ui-react";
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
        </div>
        {/* Parallax */}
        {/* <div
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
        </div> */}
        <div
          style={{
            background: "#1B1C1D",
            padding: "2rem 2rem 0 2rem",
            minWidth: "100%",
          }}
        >
          <div className={styles.styledContainer}>
            <div className={styles.styledSubContainerOne}>
              <div className={styles.innerSubContainerOner}>
                <p className={styles.lineHeight}>
                  <p className={styles.preTitle}>We will make it</p>
                  <p className={styles.strong}>Happen</p>
                </p>
              </div>
              <p className={styles.subTitle}>ICONIC MEDIA DEVELOPMENT LLC</p>
            </div>
            <div className={styles.styledSubContainerTwo}>
              <p>
                Here at The Iconic Media we are a full service Design and
                Software development agency.
              </p>
              <p>Have an idea for a website or smarphone app?</p>
              <div>
                <Button
                  secondary
                  onClick={() => {
                    // showSubForm(true);
                    console.log("Hereee11");
                  }}
                >
                  Get A Quote
                </Button>
              </div>
            </div>
          </div>
        </div> 
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

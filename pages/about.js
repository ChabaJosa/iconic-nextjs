import React from "react";
import Image from "next/image";
//
import dude1 from "../public/dude1.png";
import dude3 from "../public/dude3.png";
import raulin from "../public/raulin.png";
import chabalin from "../public/chabalin.png";
import styles from "../styles/About.module.css";
//
export default function About() {
  const lazyRoot = React.useRef(null);
  //
  return (
    <div className={styles.mainContainer}>
      <div
        style={{
          display: "flex",
          flex: 1,
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // border: "1px solid green",
          }}
        >
          {/* first-column */}
          <div style={{ margin: 8, padding: 8 }}>
            {window.innerWidth > 1080 ? (
              <>
                <h5 style={{ color: "#ffc92b" }}>Hello, I am</h5>
                <h1 style={{ letterSpacing: "16px" }}>CHABA JOSA</h1>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  padding: "2rem 0",
                  justifyContent: "space-between",
                  // border: "1px solid green",
                  // alignItems: "center",
                }}
              >
                <div>
                  <h5 style={{ color: "#ffc92b" }}>Hello, I am</h5>
                  <h1 style={{ letterSpacing: "16px" }}>CHABA JOSA</h1>
                </div>
                {/* <Image src={chabalin} size="medium" alt="img" circular /> */}
                <div
                  ref={lazyRoot}
                  style={{ overflowX: "scroll", width: "400px" }}
                >
                  <Image
                    lazyRoot={lazyRoot}
                    src={chabalin}
                    width="400"
                    height="400"
                    alt="img"
                  />
                </div>
              </div>
            )}
            {/* <h5 style={{ color: "#ffc92b" }}>Hello, I am</h5>
            <h1 style={{ letterSpacing: "16px" }}>CHABA JOSA</h1> */}
            <h3 style={{ color: "#ffc92b" }}>Lead Developer & Partner</h3>
            <p>
              Full-stack software developer with a +3 year background in SEO,
              project management, and social media. My current aspirations are
              to grow within the tech industry while continuing to learn as much
              about programming as possible.
            </p>
            <p>
              Specialties: JavaScript, ES6, HTML5, CSS3, ReactJS, NodeJS,
              GraphQL, NextJS, GatsbyJS, React-Native, NoSQL, SQL, ILE RPG IV,
              IBM i OS, Profound UI/Js
            </p>
          </div>
          <div>
            {/* second row: Testimonial And/Or Social Media */}
            {/* Testimonials / Important Links / Hobbies here */}
          </div>
        </div>
        {window.innerWidth > 1080 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              // border: "1px solid green",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image src={dude1} alt="img" size="medium" /> */}
            <div ref={lazyRoot} style={{ overflowX: "scroll", width: "400px" }}>
              <Image
                lazyRoot={lazyRoot}
                src={dude1}
                width="400"
                height="400"
                alt="img"
              />
            </div>
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          color: "white",
        }}
      >
        {window.innerWidth > 1080 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              // border: "1px solid green",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Image src={dude3} size="medium" /> */}
            <div ref={lazyRoot} style={{ overflowX: "scroll", width: "400px" }}>
              <Image
                lazyRoot={lazyRoot}
                src={dude3}
                width="400"
                height="400"
                alt="img"
              />
            </div>
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            // border: "1px solid green",
          }}
        >
          {/* first-column */}
          <div style={{ margin: 8, padding: 8, textAlign: "right" }}>
            {window.innerWidth > 1080 ? (
              <>
                <h5 style={{ color: "#ffc92b" }}>Hello, I am</h5>
                <h1 style={{ letterSpacing: "16px", paddingRight: "2rem" }}>
                  RAUL DOEJO
                </h1>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flex: 1,
                  padding: "2rem 0",
                  justifyContent: "space-between",
                  // border: "1px solid green",
                  // alignItems: "center",
                }}
              >
                {/* <Image src={raulin} size="medium" circular /> */}
                <div
                  ref={lazyRoot}
                  style={{ overflowX: "scroll", width: "400px" }}
                >
                  <Image
                    lazyRoot={lazyRoot}
                    src={raulin}
                    width="400"
                    height="400"
                    alt="img"
                  />
                </div>
                <div style={{ textAlign: "right" }}>
                  <h5 style={{ color: "#ffc92b" }}>Hello, I am</h5>
                  <h1 style={{ letterSpacing: "16px", paddingLeft: "2rem" }}>
                    RAUL DOEJO
                  </h1>
                </div>
              </div>
            )}
            <h3 style={{ color: "#ffc92b" }}>Lead UX/UI & Partner</h3>
            <p>
              I’m a creative problem solver and love the thrill of solving a
              challenge, from the moment of researching about the problem,
              understanding it, and then ideating the perfect solution for it. I
              am a confident, creative, and qualified international business
              major and Product designer; Consider myself as a bridge between
              end-users and businesses, understanding both perspectives and
              looking for the best answer that makes everybody happy.
            </p>
            <p>
              Background includes a great work ethic, exceptional school grades,
              a commitment to organizational objectives, and advanced technical
              skills. Fluent in English and Spanish.
            </p>
          </div>
          <div>
            {/* second row: Testimonial And/Or Social Media */}
            {/* Testimonials / Important Links / Hobbies here */}
          </div>
        </div>
      </div>
    </div>
  );
}

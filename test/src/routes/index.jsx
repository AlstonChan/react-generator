import styles from "$Styles/homepage.module.scss";
import react from "../../public/react.png";
import webpack from "../../public/webpack.png";

import Image from "@chan_alston/image";

import React from "react";

export default function Homepage() {
  return (
    <div className={styles.all}>
      <header className={styles.header}>
        <a
          href="https://github.com/AlstonChan/react-generator"
          target="_blank"
          className={styles.navHeader}
          rel="noreferrer"
        >
          React Generator (Webpack + Babel)
        </a>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={react}
              alt="react js icon"
              className={styles.reactSpin}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={webpack}
              alt="webpack icon"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        Created by{" "}
        <a href="https:/www.chanalston.com" target="_blank" rel="noreferrer">
          AlstonChan
        </a>
      </footer>
    </div>
  );
}

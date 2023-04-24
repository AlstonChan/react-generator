import styles from "../styles/homepage.module.scss";
import react from "../../public/react.png";
import webpack from "../../public/webpack.png";

import Image from "@chan_alston/image";

import React from "react";

export default function Homepage() {
  return (
    <div className={styles.all}>
      <header className={styles.header}>
        <h1 className={styles.navHeader}>React Webpack Template</h1>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image
              src={react}
              alt="react js icon"
              className={styles.reactSpin}
            />
          </div>
          <div className={styles.imgContainer}>
            <Image src={webpack} alt="webpack icon" />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        Created by <a href="https://github.com/AlstonChan">AlstonChan</a>
      </footer>
    </div>
  );
}

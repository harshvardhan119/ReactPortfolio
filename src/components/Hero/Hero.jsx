import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsh Vardhan Singh</h1>
        <p className={styles.description}>
        "Every line of code you write is a step toward turning ideas into reality—keep pushing the boundaries of what's possible!"
        </p>
        <a href="mailto:harshvardhansinghha@gmail.com" className={styles.button}>
        <span>Contact Me </span>
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

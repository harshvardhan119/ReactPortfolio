import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Harsh</h2>
        <p>Mern Developer,FreeLancer</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:harshvardhansinghha@gmail.com">harshvardhansinghha@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/harsh-vardhan-singh-083721257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/Harsh Vradhsn Singh</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/harshvardhan119/">https://github.com/harshvardhan119/</a>
        </li>
      </ul>
    </footer>
  );
};

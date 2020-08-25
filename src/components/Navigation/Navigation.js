import React from "react";
import styles from "./Navigation.module.scss"
const Navigation = () => {
  return ( <div className={styles.navigation}>
  <a className={styles.link} href="/">
    Twitters
  </a>
  <a className={styles.link} href="/article">
    Articles
  </a>
  <a className={styles.link} href="/notes">
    Notes
  </a>
</div>
)
 
};

export default Navigation;

import React from "react";
import styles from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
const Navigation = () => (
  <nav className={styles.navigation}>
    <ul className={styles.navigationWrapper}>
      <li className={styles.navigation__item}>
        <NavLink  exact activeClassName={styles.navigation__itemLinkActive} className={styles.navigation__itemLink}  to="/">
        twitters
      </NavLink></li>
      <li className={styles.navigation__item}>
        <NavLink  activeClassName={styles.navigation__itemLinkActive} className={styles.navigation__itemLink}  to="/article">
        articles
      </NavLink></li>
      <li className={styles.navigation__item}>
        <NavLink  activeClassName={styles.navigation__itemLinkActive} className={styles.navigation__itemLink}  to="/notes">
        notes
      </NavLink></li>
    </ul>
  </nav>
);

export default Navigation;

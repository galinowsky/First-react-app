import React from "react";
import styles from "./HeaderNavigation.module.scss";
import { NavLink } from "react-router-dom";
const HeaderNavigation = () => (
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

export default HeaderNavigation;

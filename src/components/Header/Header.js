import React from 'react';
import styles from "./Header.module.scss";
import HeaderNavigation from './HeaderNavigation'
import logoImage from "../../assets/images/logo.svg"
import Button from "../Button/Button"


const Header = () => (
    <header className={styles.wrapper}>
        <img className={styles.logoImg} src={logoImage} alt="favNote logo"></img>
        <HeaderNavigation/>
        <Button secondary='true' >new item</Button>
    </header>
)

export default Header
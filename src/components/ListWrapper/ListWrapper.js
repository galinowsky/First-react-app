import React from "react";
import ListItem from "./ListItem/ListItem.js";
import styles from "./listWrapper.module.scss";
// import { twitterAccounts } from "../../data/twitterAccounts";

// console.log(twitterAccounts[0].name);

const ListWrapper = props => (
  <ul className={styles.wrapper}>
    {props.items.map(item => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

export default ListWrapper;

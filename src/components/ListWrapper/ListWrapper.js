import React from "react";
import ListItem from "./ListItem/ListItem.js";
import styles from "./listWrapper.module.scss";
// import { twitterAccounts } from "../../data/twitterAccounts";

// console.log(twitterAccounts[0].name);

const ListWrapper = (items) => {
   console.log(items.props)
   
return(

  <ul className={styles.wrapper}>
    {items.props.map(item => (
      <ListItem key={items.props.type} {...item} />
    ))}
  </ul>
)

}



export default ListWrapper;

import React from "react";
import ListItem from "./ListItem/ListItem.js";
import styles from "./listWrapper.module.scss";
// import { twitterAccounts } from "../../data/twitterAccounts";

// console.log(twitterAccounts[0].name);

const ListWrapper = (twitters) => {
   console.log(twitters.props)
   
return(

  <ul className={styles.wrapper}>
    {/* {twitters.props.map(item => (
      <ListItem key={twitters.props.type} {...item} />
    ))} */}
  </ul>
)

}



export default ListWrapper;

import React from "react";
import ListItem from "./ListItem/ListItem.js";
import "./listWrapper.css";
import { twitterAccounts } from "../../data/twitterAccounts";

console.log(twitterAccounts[0].name);

const ListWrapper = () => (
  <ul className="listWrapper_wrapper">
    {twitterAccounts.map((item) => (
      <ListItem {...item} key={item.name} />
    ))}
  </ul>
);

export default ListWrapper;

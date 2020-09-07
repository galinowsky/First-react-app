import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
const TwittersView = () => {
  return (
    <>
      <p>This is an Twitters view</p>
      <AppContext.Consumer>
        {(context) => {
     
          return <ListWrapper props={context.twitter} />;
        }}
      </AppContext.Consumer>
    </>
  );
};

export default TwittersView;

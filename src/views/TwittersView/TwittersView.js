import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
const TwittersView = () => {
  return (
    <>

      <AppContext.Consumer>
        {(context) => <ListWrapper props={context.twitter} />}
      </AppContext.Consumer>
    </>
  );
};

export default TwittersView;

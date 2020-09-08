import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";
const ArticlesView = () => {
  return (
    <AppContext.Consumer>
      {(context) => <ListWrapper props={context.article} />}
    </AppContext.Consumer>
  );
};

export default ArticlesView;

import React from "react";
import AppContext from "../../context";
import ListWrapper from "../../components/ListWrapper/ListWrapper";

const NotesView = () => {
  return (
    <>

      <AppContext.Consumer>
        {(context) => <ListWrapper props={context.note} />}
      </AppContext.Consumer>
    </>
  );
};

export default NotesView;

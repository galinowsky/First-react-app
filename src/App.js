import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper.js";
import "./index.css";
import "./data/twitterAccounts";
import { twitterAccounts } from "./data/twitterAccounts";
import Form from "./components/Form/Form";
class App extends React.Component {
  state = {
    items: twitterAccounts,
  };
  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      image: e.target[2].value,
      name: e.target[0].value,
      description: e.target[3].value,
      twitterLink: e.target[1].value,
    };

    this.setState({
      items: [...twitterAccounts, newItem],
    });
    e.target.reset();
  };
  render() {
    return (
      <div>
        <ListWrapper items={this.state.items} />
        <Form submitFn={this.addItem} />
      </div>
    );
  }
}

export default App;

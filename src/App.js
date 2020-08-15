import React from "react";
import ListWrapper from "./components/ListWrapper/ListWrapper.js";
import "./index.css";
import './data/twitterAccounts'
import { twitterAccounts } from "./data/twitterAccounts";
import Form from "./components/Form/Form"
class App extends React.Component {
  state ={
      items: twitterAccounts,
  }
    
    render() {
    return (
      <div>
          
        <ListWrapper 
        items = {this.state.items}
        />
        <Form/>
      </div>
    );
  }
}

export default App;

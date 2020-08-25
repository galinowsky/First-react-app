import React from "react";
import "./index.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import TwittersView from '../TwittersView/TwittersView'
import ArticlesView from '../ArticlesView/ArticlesView'
import NotesView from '../NotesView/NotesView'
import Header from '../../components/Header/Header'

const initialStateItems = [
  {
    image: "https://pbs.twimg.com/profile_images/906557353549598720/oapgW_Fp.jpg",
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <BrowserRouter>
      <>
      <Header/>
       <h1>Hello world</h1>
       <Switch>
       <Route exact path="/" component={TwittersView}></Route>
       <Route exact path="/article" component={ArticlesView}></Route>
       <Route exact path="/notes" component={NotesView}></Route>
       </Switch>
       </>
      </BrowserRouter>
    );
  }
}

export default Root;

import React from "react";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TwittersView from "../TwittersView/TwittersView";
import ArticlesView from "../ArticlesView/ArticlesView";
import NotesView from "../NotesView/NotesView";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import AppContext from "../../context";
class Root extends React.Component {
  state = {
    twitter: [{
      title: 'lorem ipsum',
      description: 'dolor sit amet lorem ipsum psum dolor',
      link: 'https://google.com',
      image: 'https://i.picsum.photos/id/9/200/200.jpg?hmac=KeGvZtsfErXTVxRSy5Kev3vLnJBdBYcYoGviv8RE5Vk'
    },
    {
      title: 'lorem ipsum',
      description: 'dolor sit amet lorem ipsum psum dolor',
      link: 'https://google.com',
      image: 'https://i.picsum.photos/id/9/200/200.jpg?hmac=KeGvZtsfErXTVxRSy5Kev3vLnJBdBYcYoGviv8RE5Vk'
    },
    {
      title: 'lorem ipsum',
      description: 'dolor sit amet lorem ipsum psum dolor',
      link: 'https://google.com',
      image: 'https://i.picsum.photos/id/9/200/200.jpg?hmac=KeGvZtsfErXTVxRSy5Kev3vLnJBdBYcYoGviv8RE5Vk'
    }],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));


    this.closeModal();
  };
  twitterAdd = (e) => {};

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
     
          <Switch>
            <Route exact path="/" component={TwittersView}></Route>
            <Route exact path="/article" component={ArticlesView}></Route>
            <Route exact path="/notes" component={NotesView}></Route>
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import FormRadio from "./FormRadio";
import AppContext from "../../context";
const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const description = {
  twitter: "Favourite twitter account",
  article: "Article",
  note: "Note",
};

class Form extends React.Component {
  state = {
    activeOption: types.twitter,
    name: "",
    link: "",
    image: "",
    dscription: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      activeOption: type,
    });
  };
  handleInputChange = (e) => {
    console.log(e.target.name);
    // this.setState(this.state[e.target.name] = e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { activeOption } = this.state;
    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {description[activeOption]}</Title>
            <div className={styles.formOptions}></div>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={context.addItem}
            >
              <div className={styles.formOptions}>
                <FormRadio
                  id={types.twitter}
                  checked={this.state.activeOption === types.twitter}
                  changeFn={() => this.handleRadioButtonChange(types.twitter)}
                >
                  Twitter
                </FormRadio>
                <FormRadio
                  id={types.article}
                  checked={this.state.activeOption === types.article}
                  changeFn={() => this.handleRadioButtonChange(types.article)}
                >
                  Article
                </FormRadio>
                <FormRadio
                  id={types.note}
                  checked={this.state.activeOption === types.note}
                  changeFn={() => this.handleRadioButtonChange(types.note)}
                >
                  Note
                </FormRadio>
              </div>

              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                name="title"
                label={
                  activeOption === types.twitter ? "Twitter Name" : "Title"
                }
                maxLength={30}
              />
              {activeOption === types.note ? null : (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  name="link"
                  label={
                    activeOption === types.twitter ? "Twitter Link" : "Link"
                  }
                />
              )}

              {activeOption === types.twitter ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  name="image"
                  label="Image"
                />
              ) : null}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                label="Description"
              />
              <Button>add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
export default Form;

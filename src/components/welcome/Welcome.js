import React from "react";
import Button from "../button";
import Game from "../game";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null || "You", isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    if (this.state.isClicked) {
      return <Game name={this.state.name} />;
    }
    return (
      <div className="welcome">
        <div className="header">
          <h1 className="header__tittle">Type Racer</h1>
        </div>

        <div className="main">
          <img className="main__logo" alt="logo" />
          <p className="main__paragraph">This is a copy of type Racer Game</p>
          <form className="main__form">
            <input
              type="text"
              placeholder="Insert Your Name Here"
              className="main__form__input"
              onChange={this.handleChange}
            ></input>
          </form>
          <Button text={"Play"} onClick={this.handleClick} />
        </div>

        <div className="footer">
          <p className="footer__mention">
            Made by Dionysis Koufis Using
            <span role="img" aria-label="react">
              ⚛️
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;

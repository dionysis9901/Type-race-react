import React from "react";
import Button from "../button";
import Welcome from "../welcome";

import { Text } from "../../utilities/main.js";

import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginBtn: false,
      backBtn: false,
      gameText:
        " *This will be replaced with TEXT when you press the Begin button* ",
      userText: null
    };

    this.goBack = this.goBack.bind(this);
    this.beginGame = this.beginGame.bind(this);
    this.manageUserInput = this.manageUserInput.bind(this);
  }

  goBack() {
    this.setState({ backBtn: true });
  }

  beginGame() {
    this.setState({ beginBtn: true, gameText: Text.randomize() });
  }

  manageUserInput(event) {
    this.setState({ userText: event.target.value });
  }

  render() {
    const { beginBtn, backBtn, gameText } = this.state;
    const { name } = this.props;

    if (backBtn) {
      return <Welcome />;
    }

    return (
      <div className="game">
        <div className="header">
          <h2 className="header__tittle">Type Faster</h2>
        </div>

        <div className="container">
          <div className="container__textBox">
            <p className="container__textBox__username">{name}</p>
            <p className="container__textBox__instructions">
              Type the text you see bellow in the white area as fast as you can!
            </p>
            <p className="container__textBox__generatedText">{gameText}</p>
          </div>

          <div className="container__typeBox">
            <textarea
              type="text"
              placeholder="Type Here!!"
              className="container__typeBox__userInput"
              onChange={this.manageUserInput}
            ></textarea>
          </div>
          <div className="container__buttons">
            {" "}
            <Button text={"Begin"} onClick={this.beginGame} />
            <Button text={"Back"} onClick={this.goBack} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

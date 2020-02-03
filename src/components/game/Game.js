import React from "react";
import Button from "../button";
import Welcome from "../welcome";

import { Word } from "../../utilities/main.js";

import "./game.scss";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beginBtn: false,
      backBtn: false,
      gameWord:
        " *This will be replaced with TEXT when you press the Begin button* ",
      userWord: ""
    };

    this.goBack = this.goBack.bind(this);
    this.beginGame = this.beginGame.bind(this);
    this.manageUserInput = this.manageUserInput.bind(this);
  }

  goBack() {
    this.setState({ backBtn: true });
  }

  beginGame() {
    if (!this.state.beginBtn) {
      this.setState({ beginBtn: true, gameWord: Word.randomize() });
    }
  }

  manageUserInput(event) {
    this.setState({ userWord: event.target.value }, () => {
      if (this.state.userWord === this.state.gameWord) {
        this.setState({ gameWord: Word.randomize(), userWord: "" });
      }
    });
  }

  render() {
    const { beginBtn, backBtn, gameWord, userWord } = this.state;
    const { name } = this.props;

    console.log(userWord); //Remove It

    if (backBtn) {
      return <Welcome />;
    }

    return (
      <div className="game">
        <div className="header">
          <h2 className="header__tittle">Type Faster</h2>
        </div>

        <div className="container">
          <div className="container__wordBox">
            <p className="container__wordBox__username">{name}</p>
            <p className="container__wordBox__instructions">
              Type the text you see bellow in the white area as fast as you can!
            </p>
            <p className="container__wordBox__generatedText">{gameWord}</p>
          </div>

          <div className="container__typeBox">
            <input
              type="text"
              placeholder="Type Here"
              className="container__typeBox__userInput"
              value={userWord}
              onChange={this.manageUserInput}
            ></input>
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

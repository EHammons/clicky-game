import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="header">
        <div className="title">{props.children}</div>
        <div className="scores">
        Score: {props.score} Highscore: {props.highscore}
        </div>
        <div className="instructions">Click on an image to earn points, but don't click on any more than once!</div>
    </div>
  );
}

export default Title;

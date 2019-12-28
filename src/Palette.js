import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  render() {
    // Destructure
    const { colors } = this.props.palette;
    const { level } = this.state;

    const colorBoxes = colors[level].map(color => <ColorBox background={color.hex} name={color.name} />);
    return (
      <div className="Palette">
        <Navbar changeLevel={this.changeLevel} level={level} />
        {/* TODO: Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* TODO: Footer */}
      </div>
    );
  }
}

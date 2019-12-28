import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    // Destructure
    const { colors } = this.props.palette;
    const { level, format } = this.state;

    const colorBoxes = colors[level].map(color => <ColorBox background={color[format]} name={color.name} />);
    return (
      <div className="Palette">
        <Navbar changeLevel={this.changeLevel} level={level} handleFormatChange={this.changeFormat} />
        {/* TODO: Navbar goes here */}
        <div className="Palette-colors">{colorBoxes}</div>
        {/* TODO: Footer */}
      </div>
    );
  }
}

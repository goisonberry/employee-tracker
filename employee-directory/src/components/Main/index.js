import React, { Component } from "react";
import SearchArea from "../SearchArea";
import TableArea from "../TableArea";
import "./style.css";

export default class Main extends Component {
  render() {
    return (
      <>
        <SearchArea />
        <TableArea />
      </>
    );
  }
}

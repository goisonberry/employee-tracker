import React, { Component } from "react";
import SearchArea from "../SearchArea";
import TableArea from "../TableArea";
import API from "../../utils/API.js";
import "./style.css";

export default class Main extends Component {
  state = {
    employees: [],
    sortStatus: "D",
    filteredEmployees: [],
  };
  componentDidMount() {
    API.employeeInfo().then((data) => {
      console.log("data", data);
      this.setState({
        employees: data.data.results,
        filteredEmployees: data.data.results,
      });
    });
  }
  employeeSearch = (event) => {
    // get what they input event.target.value....use filter to filer all employees this.state.employees.filter (keep lower and uppercase in mind)
  };
  sortLastName = () => {
    // add state to say what the current state of function (A and D order)..use if else, sort function pass it a compare function inside the sort function.
  };
  render() {
    return (
      <>
        <SearchArea employeeSearch={this.employeeSearch} />
        <TableArea
          employees={this.state.filteredEmployees}
          sortLastName={this.sortLastName}
        />
      </>
    );
  }
}

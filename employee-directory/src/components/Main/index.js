import React, { Component } from "react";
import SearchArea from "../SearchArea";
import TableArea from "../TableArea";
// import API from "../../utils/API.js";
import API from "../../utils/API.js";
// import DataFile from "../../utils/data.json";
import "./style.css";

export default class Main extends Component {
  state = {
    employees: [],
    sortStatus: "D",
    filteredEmployees: [],
  };
  componentDidMount() {
    // add the fall back here for data.json
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
    let nameSeach = event.target.value;
    let empLookingFor = this.state.employees.filter((foundEmp) => {
      return foundEmp.lastName.toLowercase().includes(nameSeach.toLowercase());
    });
    this.setState({ employees: empLookingFor });
  };
  sortLastName = () => {
    // add state to say what the current state of function (A and D order)..use if else, sort function pass it a compare function inside the sort function.
    if (this.state.sortStatus === "D") {
      let ascendingEmp = this.state.employees.sort((a, b) =>
        a.lastName > b.lastName ? 1 : -1
      );

      this.setState({
        employees: ascendingEmp,
        sortStatus: "A",
      });
    } else {
      let descendingEmp = this.state.employees.sort((a, b) =>
        a.lastName < b.lastName ? 1 : -1
      );

      this.setState({
        employees: descendingEmp,
        sortStatus: "D",
      });
    }
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

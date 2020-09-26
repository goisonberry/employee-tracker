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
      this.setState({
        employees: data.data.results,
        filteredEmployees: data.data.results,
      });
    });
  }

  employeeSearch = (event) => {
    // get what they input event.target.value....use filter to filer all employees this.state.employees.filter (keep lower and uppercase in mind)
    let nameSearch = event.target.value;
    let empLookingFor = this.state.employees.filter((foundEmp) => {
      return foundEmp.name.last
        .toLowerCase()
        .includes(nameSearch.toLowerCase());
    });
    this.setState({ filteredEmployees: empLookingFor });
  };
  sortLastName = () => {
    // add state to say what the current state of function (A and D order)..use if else, sort function pass it a compare function inside the sort function.
    if (this.state.sortStatus === "D") {
      let ascendingEmp = this.state.filteredEmployees.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );

      this.setState({
        filteredEmployees: ascendingEmp,
        sortStatus: "A",
      });
    } else {
      let descendingEmp = this.state.employees.sort((a, b) =>
        a.name.last < b.lname.last ? 1 : -1
      );

      this.setState({
        filteredEmployees: descendingEmp,
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

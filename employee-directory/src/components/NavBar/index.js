import React from "react";
import EmployeeSearch from "../EmployeeSearch";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-colapse row" id="navBar">
        {/* import employee search box here */}
        <EmployeeSearch
        // handleSearchChange={handleSearchChange}
        />
      </div>
    </nav>
  );
}

export default Navbar;

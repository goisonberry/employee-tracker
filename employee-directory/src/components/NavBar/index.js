import React from "react";
import EmployeeSearch from "../EmployeeSearch";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        {/* import employee search box here */}
        <EmployeeSearch />
      </div>
    </nav>
  );
}

export default Navbar;

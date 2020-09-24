import React from "react";
import "./style.css";

function SearchArea(props) {
  return (
    <div id="searchArea">
      <input
        type="text"
        placeholder="search"
        onChange={(e) => props.employeeSearch(e)}
      />
    </div>
  );
}

export default SearchArea;

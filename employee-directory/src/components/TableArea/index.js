import React from "react";
import "./style.css";

function TableArea(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th onClick={props.sortLastName}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((emp) => {
          return (
            <tr key={emp.id.name + "-" + emp.id.value}>
              <td>{emp.id.name + "-" + emp.id.value}</td>
              <td>
                <img src={emp.picture.thumbnail} alt="employee" />
              </td>
              <td>{emp.name.first + " " + emp.name.last}</td>
              <td>{emp.phone}</td>
              <td>{emp.email}</td>
              <td>{emp.dob.date.slice(0, 10)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableArea;

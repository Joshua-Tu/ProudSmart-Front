import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class EducatorLinks extends Component {
  render() {
    
    return (
      <ul className="right">
        <li>
          <NavLink to="/users/dashboard">
            Purchased Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/educators/dashboard">
            Taught Courses
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses/new">
            Create a Course
          </NavLink>
        </li>
      </ul>
    );
  }
}


export default EducatorLinks;
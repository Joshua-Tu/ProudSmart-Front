import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Image from "./../images/GoLang.jpeg";
import Axios from "axios";

const squareBackgroundImage = {
  backgroundImage: `url(${Image})`,
  height: "150px",
  width: "150px",
  backgroundSize: "contain"
};

const squareCardHolder = {
  backgroundColor: "pink",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1%",
  padding: "0",
  width: "20%",
  height: "300px"
};

const informationSection = {
  display: "flex",
  height: "10%",
  flexDirection: "column",
  padding: "10px"
};

const priceOrButtons = {
  width: "60%"
};

class SquareCard extends Component {
  state = { courses: [] };

  componentDidMount() {
    Axios("http://localhost:3000/courses").then(response => {
      console.log(response.data);
      this.setState({ courses: response.data });
    });
  }

  render() {
    return (
      <>
        {this.state.courses.map(course => {
          return (
            <div key={course.title} style={squareCardHolder}>
              <Link to="/courses/show">
                <div style={squareBackgroundImage}> </div>
              </Link>
              <div style={informationSection}>
                <h5>{course.title.slice(0, 12) + "..."}</h5>
                <p>{course.description.slice(0, 60) + "..."}</p>
                <Button size="large" style={priceOrButtons}>
                  Price: {course.price}$
                </Button>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default SquareCard;

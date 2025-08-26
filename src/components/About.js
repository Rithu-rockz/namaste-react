import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }
  componentDidMount() {
    console.log("Parent componentDidMount called");
  }
  render() {
    console.log("Parent render called");
    return (
      <div>
        <h1>Swiggy is the most popular app for delivery food on time</h1>
        <h2>
          Swiggy is the most popular app for delivery food on timeSwiggy is the
          most popular app for delivery food on timeSwiggy is the most popular
          app for delivery food on timeSwiggy is the most popular app for
          delivery food on timeSwiggy is the most popular app for delivery food
          on time
        </h2>
        <UserClass />
      </div>
    );
  }
}

export default About;

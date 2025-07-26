import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", {}, "I am sara"),
    React.createElement("h2", {}, "I am Rithu"),
  ]),
]);

const jsxHeading = (
  <h1 className="heading" tabIndex={1}>
    {" "}
    Namaste React by JSX{" "}
  </h1>
);

const Title = () => <h1>Welcome!</h1>;

const number = 3456;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h3>{number}</h3>
    <h2>{console.log("success")}</h2>
    <h2>This is my first react project</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

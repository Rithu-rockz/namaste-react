import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      // count2: 1,
      userInfo: {
        name: "Dummy",
        ID: 123,
      },
    };
    // console.log(this.props.name + "child constructor called");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rithu-rockz");
    const json = await data.json();
    console.log(json);
    // console.log(this.props.name + "child componentDidMount called");
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //const { name } = this.props;
    //const { count, count2 } = this.state;
    //console.log(this.props.name + "child render called");
    const { login, id } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {login}</h2>
        <h2>ID:{id}</h2>
      </div>
    );
  }
}

export default UserClass;

import React, { Component } from "react";

class Login extends Component {
    state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.checkUser(this.state.username, this.state.password);
  };

  handleChangeUsername = event => {
    const username = event.target.value
    this.setState(prevState =>  ({username }));
  };
  handleChangePassword = event => {
    const password = event.target.value
    this.setState(prevState => ({ password }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={this.handleChangeUsername.bind(this)}
          value={this.state.username}
        />
        <input
          type="password"
          name="password"
          onChange={(event) => this.handleChangePassword(event)}
          value={this.state.password}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;

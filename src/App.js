import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./Login";
import Cinema from './Cinema';
import "./App.css";

class App extends Component {
  state = {
    users: [
      {
        username: "user1",
        password: '1234'
      },
      {
        username: "user2",
        password: '1234'
      },
      {
        username: "user3",
        password: '1234'
      }
    ],
    cinemas: [{name:'cinema1'}, {name:'cinema2'}, {name:'cinema3'}],
    logIn: false
  };

  checkUser = (username, password) => {
    this.state.users.forEach(user => {
      if (user.username === username && user.password === password) {
        this.setState(() => {
          return {
            logIn: true
          };
        });
      }
    });
  };

  showCinemas = () => {
    return this.state.cinemas.map((cinema) => {
        return <Cinema key={cinema.name} src='http://via.placeholder.com/350x150' cinemaName={cinema.name} />
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.logIn ? (
         this.showCinemas()
        ) : (
          <Login checkUser={this.checkUser} />
        )}
      </div>
    );
  }
}

export default App;

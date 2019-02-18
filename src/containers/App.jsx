import React, { Component } from "react";
import CardList from "../components/CardList";
import ErrorBoundry from "../components/ErrorBoundry";
import SearchBox from "../components/SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = e => {
    this.setState({
      searchfield: e.target.value
    });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;

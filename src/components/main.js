import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../stylesheets/main.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <ul>
          <li>
            <Link to="/realtime-search">Real-time search</Link>
          </li>
          <li>
            <Link to="/multi-search">Multi search</Link>
          </li>
          <li>
            <Link to="/to-do">To Do App</Link>
          </li>
        </ul>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <img src={logo} alt="" />
          <h1>React Example</h1>
          Simple starter kit to get started with React.
          </div>
        <div className="projectList">
          <h1 className="contentTitle mainTitle">Examples</h1>
          <Projects />
        </div>
      </div>
    );
  }
}

export default Main;

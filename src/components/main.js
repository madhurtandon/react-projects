import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import '../stylesheets/home.css';

class Main extends Component {
    render() {
      return (
        <div>
          <div className = "sidebar">
            <img src={logo} alt=""/>
            <h1>React Example</h1>
            Simple starter kit to get started with React.
          </div>
          <div className = "projectList">
            <h1 className = "contentTitle mainTitle">Examples</h1>
            <div className="projects">
              <Link to="/realtime-search">Real-time search</Link>
              <br/><br/>
              <Link to="/multi-search">Multi search</Link>
            </div>
          </div>
        </div>
      );
    }
}

export default Main;

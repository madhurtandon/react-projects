import React, { Component } from 'react';
import sample from '../data/realtime-search.json';
import '../stylesheets/main.css';

class RealtimeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.setState({ data: sample.results })
  }

  render() {
    return (
      <div className="container">
        <div className="search">
          <h1>Search!</h1>
          <p className="about">Here is a sample data rendered from a JSON object</p>
        </div>
        <List data={this.state.data} />
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  renderList(list) {
    return list.map(function (arrayItem) {
      return <li key={arrayItem}>{arrayItem}</li>;
    });
  }

  handleSearch(e) {
    this.setState({ search: e.target.value })
  }

  render() {
    let list = this.props.data;

    var searchStr = this.state.search.trim().toLowerCase();
    if (searchStr.length > 0) {
      list = list.filter(function (letter) {
        return letter.toLowerCase().match(searchStr);
      });
    }

    return (
      <div className="realtime-search">
        <h3>Search:</h3>
        <input type="text" value={this.state.search} onChange={this.handleSearch} placeholder="Search the list" />
        <ul>{this.renderList(list)}</ul>
      </div>
    );
  }
}

export default RealtimeSearch;

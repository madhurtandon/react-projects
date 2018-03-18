import React, { Component } from 'react';
import '../stylesheets/main.css';

let tasks = ["Finish Redux Tutorials", "Learn more about Relay", "Build 5 more React apps", "Review React Component Lifecycle", "Obtain Data Visualization Certificate", "Review Algorithms", "Tweet Progress", "Get a coffee!", "Browse Google Fonts", "Learn more about React Native"];

/**
 * Item Component resposible to add a new item, and filter a new item
 */
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: tasks,
            newItem: '',
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.searchQuery = this.searchQuery.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.clear = this.clear.bind(this);
        this.reset = this.reset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.newItem.length > 0) {
            this.state.items.push(this.state.newItem);
            this.setState({ newItem: '' });
        }
    }

    handleChange(e) {
        this.setState({ newItem: e.target.value })
    }

    searchQuery(e) {
        this.setState({ search: e.target.value })
    }

    deleteItem(number, e) {
        let cloneState = this.state.items.slice();
        cloneState.splice(number, 1);
        this.setState({ items: cloneState });
    }

    clear() {
        this.setState({ items: [] });
    }

    reset() {
        this.setState({ items: tasks });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="newTask"
                        type="text"
                        placeholder="create new work item"
                        onChange={this.handleChange}
                        value={this.state.newItem} /><br></br>
                    <button className="enter">Enter New Item</button>
                </form>
                <input
                    className="filterItem"
                    type="text"
                    placeholder="filter list"
                    onChange={this.searchQuery}
                    value={this.state.search} />
                <Task
                    items={this.state.items}
                    search={this.state.search}
                    deleteItem={this.deleteItem} />
                <button className="clear" onClick={this.clear}>Clear the List</button>
                <button className="reset" onClick={this.reset}>Reset the List</button>
            </div>
        );
    }
}

/**
 * This component is responsible to render the items, and removing the particular item
 */
class Task extends Component {
    render() {
        let items = this.props.items;
        let search = this.props.search;

        if (search.length > 0) {
            items = items.filter((item) => {
                return item.toLowerCase().match(search);
            });
        }

        let list = items.map((item, index) => {
            return (
                <tr key={index}>
                    <td className="taskNumber">Task {index + 1}:</td>
                    <td className="taskItem" key={index}>{item}</td>
                    <td>
                        <button
                            className="remove" onClick={this.props.deleteItem.bind(this, index)}>X</button>
                    </td>
                </tr>
            );
        })

        return (
            <table className="taskTable">
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
}

class ToDo extends Component {
    render() {
        return (
            <div className="mainContainer">
                <div className="titles">
                    <h1 className="title">To-Do App</h1>
                    <h2 className="subtitle">Enhance Your Productivity</h2>
                </div>
                <Item />
            </div>
        );
    }
}

export default ToDo;
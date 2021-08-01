import React, { Component } from 'react'
import '../App.css';



export default class CheckBoxes extends Component  {
    state = {
      allChecked: false,
      list: [
        { id: 1, name: "item1", isChecked: false },
        { id: 2, name: "item2", isChecked: false },
        { id: 3, name: "item3", isChecked: false }
      ]
    };
// function which allows me to select all the checkboxes
  handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item 
        );
        // When I click on all the checkboxes items the checkboxes select all is automatically checked
        allChecked = list.every(item => item.isChecked);
      }
      return { list, allChecked };
    });
  };

  renderList = () => {
    // I get my checkboxes items with the map function
    return this.state.list.map(item => (
      <div className="input-item" key={item.id}>
        <input
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={item.isChecked}
          onChange={this.handleChange}
        />
        <label>{item.name}</label>
      </div>
    ));
  };
  render() {
    // return my checkboxes select all
    return (
      <div>
      <div className="select">
        <input
          type="checkbox"
          name="checkAll"
          checked={this.state.allChecked}
          onChange={this.handleChange}
        />

        Select all 
        <br />
        </div>
        {/* return my checkboxes items */}
        {this.renderList()}
      </div>
    );
  }
}






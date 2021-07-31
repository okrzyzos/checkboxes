import React, { Component } from 'react'
import '../App.css';


export default class CheckBoxes extends Component {
    state = {
        allChecked: false,
        list: [
            {id:1, name: "item1", isChecked: false},
            {id:2, name: "item2", isChecked: false},
            {id:3, name: "item3", isChecked: false},
            {id:4, name: "item4", isChecked: false},
        ],
    };


handleChange = (e) => {
let list =  this.state.list;
let allChecked = this.state.allChecked;
if(e.target.value === "checkAll"){
    list.forEach(item => {
        item.isChecked = e.target.checked;
        allChecked = e.target.checked;
    });
}
else{
    list.find( item => item.name === e.target.name).isChecked = e.target.checked;
}
this.setState({list:list, allChecked: allChecked});
}

renderList = () => {


return this.state.list.map(item =>
    <div className="input-item">
    
        <input key={item.id} type="checkbox" name={item.name} value={item.name} checked={item.isChecked} onChange={this.handleChange} />
        <label>{item.name}</label>

    </div>
)
}

render(){
return(
    <>
    <div className="select">
 <input  type="checkbox" 
        value="checkAll" 
        checked={this.state.allChecked} 
        onChange={this.handleChange} />
        <label>Select All</label>
        </div>
        {this.renderList()}
    <br/>

    </>
);
}
}

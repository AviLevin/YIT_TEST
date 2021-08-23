import React, { Component } from "react";
import "./SideBar.css";


const options = [
  { value: 'chocolate', label: 'Chocolate', option: "red" },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class SideBar extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const { onChange } = this.props;
    return (
      <div className="sidebar1">
        <span>צבע רקע - שם קטגוריה</span>
        <div className="input-group mb-3">
          {/* <select defaultValue={"red"} onChange={this.handleChange} className="form-select" id="inputGroupSelect01">
            <option >choose</option>
            <option value={"red"}>red</option>
            <option value={"green"}>green</option>
            <option value={"blue"}>blue</option>
          </select> */}

          <select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            className="form-select"
            id="inputGroupSelect01"
          ></select>
        </div>

        <span>שם קטגוריה</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Edit Category"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default SideBar;

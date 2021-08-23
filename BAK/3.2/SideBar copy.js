import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  state = {
    options: [
      {
        name: "Select…",
        val: null,
      },
      {
        name: "A",
        val: "red",
      },
      {
        name: "B",
        val: "green",
      },
      {
        name: "C",
        val: "c",
      },
    ],
    val: "?",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    // const { selectedOption } = this.state;
    const { options, value } = this.state;
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
            className="form-select"
            onChange={this.handleChange}
            value={value}
          >
            {options.map((item) => (
              <option key={item.val} val={item.val}>
                {item.name}
              </option>
            ))}
          </select>
          <h1>Favorite letter: {val}</h1>
          <div style={{backgroundColor:val}}>dd</div>
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

import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  
  



  render() {

    const {onChange} = this.props;
    return (
      <div className="sidebar1">
        <span>צבע רקע - שם קטגוריה</span>
        <div className="input-group mb-3">
          <select className="form-select" id="inputGroupSelect01">
            <option selected>choose</option>
            <option value={1}>red</option>
            <option value={2}>green</option>
            <option value={3}>blue</option>
          </select>
        </div>
        <span>שם קטגוריה</span>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
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

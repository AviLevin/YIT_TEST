import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="sidebar1">
        <span>צבע רקע - שם קטגוריה</span>
        <div className="input-group mb-3">
          <select className="form-select" id="inputGroupSelect01">
            <option selected>בחר</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
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
          />
        </div>
      </div>
    );
  }
}

export default SideBar;

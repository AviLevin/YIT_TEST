import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
 
 

  render() {

   
    const { onChange, onColor, val , options} = this.props;
    console.log(val);
    return (
      <div className="sidebar1">
        <span>צבע רקע - שם קטגוריה</span>
        <div className="input-group mb-3">
        

          <select
            className="form-select"
            onChange={onColor}
            val={val}
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

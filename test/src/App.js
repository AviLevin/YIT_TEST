import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    value: "ספורט ימי",
    options: [
      {
        name: "ערוך...",
        val: null,
      },
      {
        name: "סגול",
        val: "purple",
      },
      {
        name: "אדום",
        val: "red",
      },
      {
        name: "ירוק",
        val: "green",
      },
      {
        name: "צהוב",
        val: "yellow",
      },
    ],
    val: "?",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleChangeColor = (event) => {
    this.setState({ val: event.target.value });
  };

  render() {
    const { options, val } = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              < Card value={this.state.value} val={val} />
            </div>

            <div className="col-6">
              <SideBar
                onChange={this.handleChange}
                onColor={this.handleChangeColor}
                val={this.state.val}
                options={this.state.options}
              />
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;

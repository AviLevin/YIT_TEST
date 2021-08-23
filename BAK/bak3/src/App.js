// import React  from "react";
import React, { Component } from 'react';

import "./App.css";
import Card from "./components/Card/Card";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";


class App extends Component {
  state = {  }




  
  render() { 
    return ( <div className="App">
    <div className="container">
      <div className="row">
        <div class="col-6">
          <Card></Card>
        </div>

        <div class="col-6">
          <SideBar></SideBar>
        </div>
      </div>

      <Footer></Footer>
    </div>
  </div> );
  }
}
 
export default App;


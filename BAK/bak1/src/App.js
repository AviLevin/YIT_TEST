import React from "react";
import "./App.css";
import Card from "./components/Card/Card";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="row">


        <div class="col-6">
       <Card></Card>
    </div>
    
    <div class="col-6">
      
          <SideBar></SideBar>
    </div>
         

        </div>
      </div>
    </div>
  );
};

export default App;

import React, { Component } from "react";
import "./Card.css";
import img1 from "../../assets/img1.jpg";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card-card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img1} alt="Card image cap" />
        <div className="card-body">
          {/* <h5 className={classes.title}> אבי לוין</h5> */}
          <h5 className="card-title">
            Avi Levin is developing now
          </h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <p>שירית גל</p>
        </div>
      </div>
    );
  }
}

export default Card;

import React, { Component } from "react";
import "./Card.css";
import img1 from "../../assets/img1.jpg";

class Card extends Component {
  state = {};
  render() {
    return (
      <div className="card-card" style={{ width: "18rem" }}>
        <img className="card-img-top imgArea" src={img1} alt="Card image cap" />
        <div className="card-body">
          {/* <h5 className={classes.title}> אבי לוין</h5> */}
          <h5 className="card-title">Avi Levin is developing now</h5>
          <p className="card-text subTitle">
            גם אני שעסוק כל השבוע,מתפנה לצפות בטלוויזיה רק בסופי שבוע,ונוכחתי
            לראות שרוב תוכניות הטלוויזיה בכל הערוצים עוסקים באוכל ואין להם שום
            תוכן חדש לספק
          </p>
          <p className="author">שירית גל</p>
        </div>
      </div>
    );
  }
}

export default Card;

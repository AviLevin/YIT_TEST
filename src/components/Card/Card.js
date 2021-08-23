import React, { Component } from "react";
import "./Card.css";
import img1 from "../../assets/img1.jpg";

class Card extends Component {
  render() {
    const { value, val } = this.props;
    console.log(val);
    return (
      <div className="card-card" style={{ width: "18rem" }}>
        <div className="img-hover-zoom">   <img className="card-img-top imgArea" src={img1} alt="Card image cap" /></div>
     
        <div className="card-body">
          <p className="category" style={{ backgroundColor: val }}>
            {" "}
            {value}
          </p>

          <h5 className="card-title">
            סיור קולינרי בין המסעדות הכי טובות בצפון הארץ לא כולל מזנוני אוכל
             ומאפיות מקומיות שלא דורגו בסיור.
          </h5>
          <p className="card-text subTitle">
            גם אני שעסוק כל השבוע,מתפנה לצפות &nbsp; בטלוויזיה רק בסופי
            שבוע,ונוכחתי לראות שרוב תוכניות הטלוויזיה בכל הערוצים עוסקים באוכל
            &nbsp; ואין להם שום תוכן חדש לספק ללקוחות
          </p>

          <p className="author">  שירית גל</p>
        </div>
      </div>
    );
  }
}

export default Card;

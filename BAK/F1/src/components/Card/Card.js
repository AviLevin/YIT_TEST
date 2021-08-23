import React, { Component } from "react";
import "./Card.css";
import img1 from "../../assets/img1.jpg";

class Card extends Component {
  
  render() {

    const {value,val} = this.props;
    console.log(val)
    return (
      <div className="card-card" style={{ width: "18rem" }}>
        <img className="card-img-top imgArea" src={img1} alt="Card image cap" />
        <div className="card-body">
          <p className="category"  style={{backgroundColor:val}}> {value}</p>
          
          <h5 className="card-title">
            סיור קולינרי בין המסעדות הכי טובות בצפון הארץ לא כולל מזנוני אוכל
            ומאפיות מקומיות
          </h5>
          <p className="card-text subTitle">
            גם אני שעסוק כל השבוע,מתפנה לצפות &nbsp; בטלוויזיה רק בסופי
            שבוע,ונוכחתי לראות שרוב תוכניות הטלוויזיה בכל הערוצים עוסקים באוכל
            &nbsp; ואין להם שום תוכן חדש לספק ללקוחות
          </p>

          {/* <div  style={{backgroundColor:val}}>dd</div> */}
          <p className="author" style={{backgroundColor:value}} >  שירית גל</p>

          
        </div>
      </div>
    );
  }
}

export default Card;

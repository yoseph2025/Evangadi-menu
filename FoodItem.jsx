import { Component } from 'react';
import '../commonResource/style.css'

class FoodItem extends Component {
    render() {
    const {img, title, price, desc} =this.props;
    return (
    
          <div className="single-food">
            <div className="img">
              <img src={img} />
            </div>
            <div className="title-price">
              <h3>{title}</h3>
              <p> {price}</p>
            </div>
            <div className="food-desc">{desc.slice(0, 200)}...</div>
          </div>
       
    );   
  }
}

export default FoodItem;

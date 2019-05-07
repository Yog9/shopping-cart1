import React, { Component } from "react";
import "./Products.css";
export default class Product extends Component {
  render() {
    // console.log(this.props.addToCart);
    const { image, name, price } = this.props.item;
    return (
      <React.Fragment>
        <div className="item-wrapper">
          <div className="product-image">
            <img src={image} alt={image} className="img-responsive" />
          </div>
          <div className="product-title">{name}</div>
          <div className="product-data">
            <small className="product-price">${price}</small>
            <button
              className="product-button"
              onClick={() => this.props.addToCart(this.props.index)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

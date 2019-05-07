import React, { Component } from "react";
import Product from "./Product";
import "./Products.css";
export default class ProductContainer extends Component {
  render() {
    const datamap = this.props.data.map((item, index) => (
      <Product
        item={item}
        key={item.id}
        index={index}
        addToCart={this.props.addToCart}
      />
    ));
    return <div className="product-container mt-3">{datamap}</div>;
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class CartEmpty extends Component {
  render() {
    return (
      <div className="Cart-Empty-Wrapper">
        <h1 className="Cart-Empty">Cart empty!</h1>
        <Link className="Go-To-Products" to="/">
          Try to buy something
        </Link>
      </div>
    );
  }
}

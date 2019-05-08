import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    let items = this.props.cart.length;
    // console.log(items);

    return (
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/">Shopping React</NavLink>
        </div>
        <div className="cart">
          <NavLink to="/cart">
            <i className="fas fa-shopping-cart" />
            <span className="cart-item-no">{items}</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

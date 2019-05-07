import React, { Component } from "react";
class CartItems extends Component {
  render() {
    console.log(this.props.item.quantity);
    return (
      <tr>
        <th scope="row">
          <img src={this.props.item.image} alt={this.props.item.image} />
        </th>
        <td>{this.props.item.name}</td>
        <td>
          <button
            className="button-quantity"
            onClick={() => this.props.increment(this.props.index)}
          >
            +
          </button>
          <span>{this.props.item.quantity}</span>
          <button
            className="button-quantity"
            onClick={() => this.props.decrement(this.props.index)}
          >
            -
          </button>
        </td>
        <td>$ {this.props.item.price}</td>
        <td>
          <i className="fa fa-times" />
        </td>
      </tr>
    );
  }
}
export default CartItems;

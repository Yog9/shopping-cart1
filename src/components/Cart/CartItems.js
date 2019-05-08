import React, { Component } from "react";
class CartItems extends Component {
  render() {
<<<<<<< HEAD
    //console.log(this.props.item.quantity);
=======
    console.log(this.props.item.quantity);
>>>>>>> 21b0d16de6449a01f0bd45da7d008bcb773429b3
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
<<<<<<< HEAD
            onClick={() =>
              this.props.decrement(this.props.index, this.props.item.id)
            }
=======
            onClick={() => this.props.decrement(this.props.index)}
>>>>>>> 21b0d16de6449a01f0bd45da7d008bcb773429b3
          >
            -
          </button>
        </td>
        <td>$ {this.props.item.price}</td>
        <td>
<<<<<<< HEAD
          <i
            className="fa fa-times"
            onClick={() =>
              this.props.removefromCart(this.props.item.id, this.props.index)
            }
          />
=======
          <i className="fa fa-times" />
>>>>>>> 21b0d16de6449a01f0bd45da7d008bcb773429b3
        </td>
      </tr>
    );
  }
}
export default CartItems;

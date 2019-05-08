import React, { Component } from "react";
import "./Checkout.css";
import { Modal } from "reactstrap";
export default class Checkout extends Component {
  state = {
    name: "You",
    email: "",
    address: "",
    modalIsOpen: false
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div className="Checkout-Wrapper">
        <h1 className="Checkout-Title">Checkout</h1>
        <form className="Checkout-Form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="Checkout-Input"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="Checkout-Input"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="Checkout-Input"
            onChange={this.handleChange}
          />
          <button
            class="product-button Checkout-Button"
            onClick={this.openModal}
          >
            Place order
          </button>
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="content"
        >
          <i className="fa fa-times Close-Modal" onClick={this.closeModal} />
          <p style={{ color: "#000", padding: "20px" }}>
            Thanks <strong>{this.state.name}</strong> for testing my simple
            Online Shopping Cart!
          </p>
        </Modal>
      </div>
    );
  }
}

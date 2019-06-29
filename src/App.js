import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProductContainer from "./components/Items/ProductContainer";
import Checkout from "./components/Checkout/Checkout";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          image:
            "https://www.bridgfordgear.com/wp-content/uploads/2014/05/LSW289_Heather-Grey-150x150.png",
          name: "Grey-Sack",
          price: 900,
          quantity: 0
        },
        {
          id: 2,
          image:
            "https://cdn.shopify.com/s/files/1/2387/8337/products/DynamicImageHandler_cbc8ec4a-fad3-4a35-82f1-06a0c663fd30_150x150.png?v=1521650532",
          name: "Black-T-Shirt",
          price: 500,
          quantity: 0
        },
        {
          id: 3,
          image:
            "http://www.imagehandler.net/?iset=0102&img=A1005675000&fmt=png&w=150&h=150&iindex=0007&c=999&cmp=85",
          name: "Official Argentina National Shirt",
          price: 1200,
          quantity: 0
        },
        {
          id: 4,
          image:
            "http://i0.wp.com/www.lifehouseink.com/wp-content/uploads/2015/03/txorangewh.png?resize=150%2C150",
          name: "T-Shirt",
          price: 200,
          quantity: 0
        },
        {
          id: 5,
          image:
            "https://cdn.shopify.com/s/files/1/2417/4365/products/oys1w6j5qv_CDBMaVDr4JeFV3b3UHhtnM3n7xjx5tSilver_150x150.png?v=1507958342",
          name: "Grey Musical T-Shirt",
          price: 750,
          quantity: 0
        },
        {
          id: 6,
          image:
            "https://cdn.shopify.com/s/files/1/2417/4365/products/njt9s5cr8n_CDBMaVDr4JeFV3b3UHhtnM3n7xjx5tTrue_Royal_150x150.png?v=1509762212",
          name: "Blue Musical T-Shirt",
          price: 950,
          quantity: 0
        }
      ],
      cart: [],
      total: 0,
      items_added: 0
    };
  }
  itemsinCart = id => {
    let c = 0;
    this.state.cart.map(item => {
      if (item.id != id) {
        this.setState({
          items_added: this.state.items_added + 1
        });
      }
    });
  };
  totalPrice = () => {
    let total = 0;
    const f_t = this.state.cart.map(
      item => (total += item.quantity * item.price)
    );
    this.setState({ total: f_t });
  };
  addToCart = index => {
    this.state.cart[index] = { ...this.state.data[index] };
    this.state.cart[index].quantity += 1;

    this.setState({
      cart: this.state.cart,
      data: this.state.data
    });
    console.log(this.state.cart[index]);
  };

  removefromCart = (id, index) => {
    console.log(`removed called on ${id}`);
    const cart = this.state.cart.filter(item => item.id !== id);
    this.setState({
      cart: cart,
      quantity: (this.state.cart[index].quantity = 0)
    });
    console.log(this.state.cart);
  };

  increment = index => {
    this.setState({
      quantity: (this.state.cart[index].quantity += 1)
    });

    console.log(this.state.cart);
  };
  decrement = (index, id) => {
    if (this.state.cart[index].quantity > 0) {
      this.setState({
        quantity: (this.state.cart[index].quantity -= 1)
      });
      if (this.state.cart[index].quantity === 0) this.removefromCart(id, index);
      console.log(this.state.cart);
    }
  };
  render() {
    return (
      <Router>
        <div className="container1">
          <Navbar
            addToCart={this.addToCart}
            cart={this.state.cart}
            itemsinCart={this.itemsinCart}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <ProductContainer
                  addToCart={this.addToCart}
                  data={this.state.data}
                />
              )}
            />
            <Route
              path="/cart"
              render={routeProps => (
                <Cart
                  {...routeProps}
                  cart={this.state.cart}
                  addToCart={this.addToCart}
                  decrement={this.decrement}
                  increment={this.increment}
                  removefromCart={this.removefromCart}
                  totalPrice={this.totalPrice}
                />
              )}
            />
            <Route path="/checkout" component={() => <Checkout />} />
            <ProductContainer />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

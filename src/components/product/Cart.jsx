import React, { useState } from 'react';
import "./index.scss";
import {
  Button,
  Row
} from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Cart({ cart, setCart }) {
   const [drawerVisible, setDrawerVisible] = useState(false);
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { buy_price, quantity }) => sum + buy_price * quantity,
      0
    );
  };

   const showDrawer = () => {
    setDrawerVisible(true);
    console.log("gizem")
  };

  const clearCart = () => {
    setCart([]);
  };

 

  const setQuantity = (product, buy_price) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = buy_price;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };
const history = useHistory();
    const routeChange = () => {
      let path = "/payment"
      history.push(path)

    }
 
  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && (
        <Button onClick={clearCart}>Clear Cart</Button>
      )}
      <div className="products">
        {cart.map((item, idx) => (
          <div className="product" key={idx}>
        <div className="imgTitle">
          <img id="cartImage" src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            </div>
            <h4>Price: ${item.buy_price}</h4>
            <Button onClick={() => removeFromCart(item)}>
              Remove
            </Button>
            <Button
              onClick={routeChange}
              className="checkoutButton"
              type="primary"
            >
              Go to Checkout
            </Button>
          </div>
        ))}
      </div>
      <div className="totalCost">
       Total Cost: ${getTotalSum()}</div>
        {/* <CheckoutDrawer
        setCart={setCart}
        cart ={cart}
        getTotalSum={getTotalSum}
        setDrawerVisible={setDrawerVisible}
        drawerVisible={drawerVisible}
      /> */}
      
    </>
  );
}
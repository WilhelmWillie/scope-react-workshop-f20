import React, { useState, useCallback, useMemo } from 'react';

import './App.css';

// Hard coded product catalog list 
import catalog from './catalog';

import CatalogItem from './CatalogItem';
import CartEntry from './CartEntry';

function App() {
  // Dynamic state variable that maintains our cart array
  const [cart, setCart] = useState([]);

  // Updates our `cart` list with whatever object is passed into it
  const addToCart = useCallback((item) => {
    setCart([
      ...cart,
      item
    ])
  }, [cart]);

  // We "map" an array of items to CatalogItem components that will be rendered in the return statement
  const catalogItems = catalog.map((item) => {
    return (
      <CatalogItem
        title={item.title}
        price={item.price}
        handleClick={
          () => {
            addToCart(item);
          }
        }
      />
    )
  });

  // Unlike catalogItems which relies on a static variable, cartItems relies on a dynamic state variable
  // Therefore, we use the useMemo hook to re-calculate/render whenever dependencies change, which in this case is only the cart array
  const cartItems = useMemo(() => {
    return cart.map((item) => {
      return (
        <CartEntry
          title={item.title}
          price={item.price}
        />
      )
    });
  }, [cart]);

  // We re-calculate the cart total amount whenever new items are added to our "cart" array
  const cartTotal = useMemo(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });

    return total;
  }, [cart]);

  return (
    <div className="container">
      <div className="items">
        {catalogItems}
      </div>

      <div className="cart">
        <h1>Shopping Cart</h1>

        {
          /* We can use the ternary operator to do conditional logic while rendering */
          cart.length > 0 ? (
            cartItems
          ) : (
            <p>No items in cart...</p>
          )
        }

        <h2 className="cart-total">Total Cost: ${cartTotal}</h2>
      </div>
    </div>
  );
}

export default App;

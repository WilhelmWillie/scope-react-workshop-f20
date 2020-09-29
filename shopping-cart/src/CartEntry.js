import React from 'react';

function CartEntry(props) {
  return (
    <div className="cart-entry">
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
    </div>
  )
}

export default CartEntry;
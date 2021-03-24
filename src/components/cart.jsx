import React, { Component } from 'react';
import ItemList from './itemlist';
import Header from './header';
import { Link } from 'react-router-dom';



export default function Cart(props) {
  
    
    console.log(props)
    const { cartItems, onAdd, onRemove } = props.location.state; 
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14; 
    const totalPrice = itemsPrice + taxPrice; 
    return (
    <div className="col-1 bg-light">
    <h2>Cart Items</h2>
    
    <div>
    {cartItems.length === 0 && <div>Cart is empty</div>} 
    {cartItems.map((item) => 
    <div key={item.id} className="row">
    <div className="col-2">{item.name}</div>
    <div className="col-2">
    <button onClick={() => onRemove(item)} className="remove">  
    -
    </button>{' '}
    <button onClick={() => onAdd(item)} className="add">
    +
    </button>
    </div>
    
    <div className="col-2 text-right">
    {item.qty} x &#8377;{item.price.toFixed(2)}
    </div>
    </div>
    )}
    
    {cartItems.length !== 0 && (  
    <>
    <hr></hr>
    <div className="row"> {/* // --> 13 */}
    <div className="col-2">Items Price</div>
    <div className="col-1 text-right">&#8377;{itemsPrice.toFixed(2)}</div>
    </div>
    <div className="row"> {/* // --> 14 */}
    <div className="col-2">Tax Price</div>
    <div className="col-1 text-right">&#8377;{taxPrice.toFixed(2)}</div>
    </div>

    
    <div className="row"> {/* // --> 16 */}
    <div className="col-2">
    <strong>Total Price</strong>
    </div>
    <div className="col-1 text-right">
    <strong>&#8377;{totalPrice.toFixed(2)}</strong>
    </div>
    </div>
    <hr />
    <div className="row"> {/* last part */}
    <button onClick={() => alert('Implement Checkout!')}>
    Checkout
    </button>
    </div>
    </>
    )}
    </div>
    </div>
    )    

}
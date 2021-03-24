
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import ItemList from './components/itemlist';
import {BrowserRouter as Router , Route} from "react-router-dom";
import Sort from "./components/sort.jsx";
import Footer from "./components/footer.jsx";
import Cart from "./components/cart.jsx"
import { useState } from 'react';
import {Link} from 'react-router-dom';

 

function App() {

  
  const [cartItems, setCartItems] = useState([]); 
  const onAdd = (item) => {               
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };                                                   
  const onRemove = (item) => {                      //--> 12
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }



  return (
    <Router>
    <React.Fragment>
    <Header />
    <Sort />
    <ItemList  onAdd={onAdd} />
    <Footer />
    <Cart />
    <Route path='/cart' cartItems={cartItems} // --> 7
            onAdd={onAdd} // --> 10 
          onRemove={onRemove} component={Cart} />

   </React.Fragment>
   </Router>
  );
}
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import Star from '../svg/star.svg';
import Search from '../svg/search.svg';
import CartIcon from '../svg/cart.svg';
import Cart from "./cart";






export default function Header(props) {
    
       
        return (
            <header>
                <nav>
 
                        <div className="nav-star ">
                             <span></span>
                        
                                <Link to="/star">
                                    <img src={Star} alt="" width="30"/>
                                </Link>
                                
                        </div>
 
 
                         <div className="nav-cart">
                         <button style={{ float: "right", backgroundColor: "transparent", border: "none" }}>
                         
                                 <Link to="/cart">
                                    <img src={CartIcon} alt="" width="30"/>
                                    <span className='badge badge-warning'  id='lblCartCount'> {this.props.counterValue}0 </span>
                                </Link>
                            
                                </button>
                               

                                <Link to={{ pathname: '/Basket', state: { cartItems:props.cartItems }  }}>
                                    <img src={CartIcon} alt="" width="30"/>{' '}
                                         {props.cartItems ? (
                                      <button className="badge">{props.cartItems.length}</button>
                                     ) : (
                                           ''
                                           )}
                                           </Link>

                        </div>
                        
                        <div className="nav-search ">
                            <span></span>
                                <Link to="/search">
                                    <img src={Search} alt="" width="30"/>
                                </Link>
                        </div>
 
                </nav>
             </header>
 );
 }


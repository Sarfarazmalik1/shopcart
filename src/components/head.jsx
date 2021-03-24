import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../css/cart.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.css';


class Head extends Component {
    render() { 
       
        return (
            <React.Fragment>
            <header>
                <div>
                 <nav className="navbar navbar-expand-lg fixed-top animate__animated animate__zoomInDown" style={{ textAlign: 'center', float: 'none', display: 'inline-block', backgroundColor: '#007BFF' }}> 

                 <div className="container">

                    
                        <div className="row animate__animated animate__lightSpeedInRight" style={{ textAlign: "center" }}>
                             <div className="col-sm-1">

                         </div>
                         <div className="col-sm-10">
                              <input type="text" placeholder="Search Products" onChange={this.onChange} className="form-control" style={{ margin: '2px' }} ></input>
                         </div>
                </div>
                    

                </div>
                   
                    <Link to="/carticon">
                        <button style={{ float: "right", backgroundColor: "transparent", border: "none" }}>
                            <i className="fa" style={{ fontSize: "34px" }}>&#xf07a;</i>
                            
                            <span className='badge badge-warning' id='lblCartCount'> {this.props.counterValue}0 </span>
                        </button>
                    </Link>
                </nav>
                </div>
                </header>
                
                </React.Fragment>  
        )
        }
    }

    export default Head;
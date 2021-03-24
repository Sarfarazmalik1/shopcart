import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  "../css/sort.css";

class Sort extends Component {
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row row justify-content-start">
            <div className="col ">  <strong>SortBy</strong> &nbsp;&nbsp;<i>Price - High to Low</i> &nbsp;&nbsp;<i>Price - Low to High</i>  &nbsp;&nbsp;<i>Discount</i>     </div>
            
             
        
             
            </div>
            </div>
         );
    }
}
 
 
export default Sort ;
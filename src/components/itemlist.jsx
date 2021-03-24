import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import  "../css/item.css";

class ItemList extends Component {
        constructor(props){
            super(props);
            this.state={
              list:[],
              error:null
              
            }
        }

        buildlist =(data)=>{
          console.log(data)
            this.setState({list:data})

        }


        componentDidMount(){
          let url= 'https://my-json-server.typicode.com/prograk/demo/items';
          fetch(url)
          .then(response=>response.json())
          .then(this.buildlist)
          .catch(error => {
              this.setState({error:error});
          }

          )
        }

    render() { 
       return (
          <div>
              <h1></h1>
              <ul>
                {
                  this.state.list.length==0 &&
                  <li>Sorry no data</li>
                }
              </ul>
              
              <ul>
                  {
                    this.state.error &&
                    <h3>{this.state.error}</h3>
                  }
              </ul>
              <div className="container">
                  <div className="row">
                      <div className="col-md-3">

                      <div className="card-group" >
                  { this.state.list.length>0 ? (
                     this.state.list.map(  (item)=>(
                  <div class="card"  >
                  
                   <img src={item.image} class="card-img-top" alt="..."></img>
                       <div class="card-body">
                         <h4 className="card-title">{item.name}</h4>
                             <p className="card-text"></p>
                             <p className="card-text"><strong>&#8377;{item.price.actual}</strong> <small className="text-muted"><s>{item.price.display}</s></small>  <span className="disc"> {item.discount}%Off </span> </p>
                            <br></br>
                             <button   className="button" onClick={() => onAdd(item)} ><strong>Add to Cart</strong></button>

                             
                     </div>

                     </div>
                     ))
                  ):null}
                     
                  

                      </div>
  
                     </div>
                 
                   </div>
                   </div>
          </div>


         );
     }
}
 
export default ItemList;

  
  
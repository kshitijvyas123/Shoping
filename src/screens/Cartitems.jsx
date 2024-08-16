import React, { useState, useEffect } from "react";
import "../Header.css";
import "./Cartitems.css";
import CartQuantity from './CartQuantity.jsx';



export default function Cartitems({cartItems}) {
    
    const [name, setName] = useState(' ')
    
    const listItems = cartItems.map(item =>
      
        <ul>
          
          <div className="items">
            <a>
            <span className="img">  
            
            <img
            height={100}
            width={100} 
            src={item.url}
            alt={item.alt}
            />
            </span>  
            <span className="icon">
            <img 
            src = {require("../assets/cross.jpg")}  
            height = {15}
            width={15}
            />
            </span>
          </a>
          <item-span>
          <span >
          <p >
            <b>{item.name}:</b>
          </p>
          </span>
          </item-span>
          <item-span>
          <p >{item.price}</p>
          </item-span>
          <item-span>
            <CartQuantity qty = {item.qty}></CartQuantity>
          </item-span>
          </div>
          
        </ul>
        
      );
  return(
  
    <div >{listItems}</div>
);

}
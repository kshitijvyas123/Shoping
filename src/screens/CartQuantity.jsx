import React, { useState, useEffect } from "react";
import "./Cartitems.css";


export default function CartQuantity({qty})
 {
    const [quantity, setQuantity] = useState(qty); 
    function addItem()
    {
     setQuantity(quantity+1)
    }
    function removeItem()
    {
        setQuantity(quantity-1)
    }
    return(
        <span>
        <img width={30} height={30} src={require("../assets/add.png")}
        onClick={addItem} />
        <p>
         <b>{quantity}</b>   
        </p>
        <img width={30} height={30} src={require("../assets/remove.png")}
        onClick={removeItem} />
        </span>
    )
 }
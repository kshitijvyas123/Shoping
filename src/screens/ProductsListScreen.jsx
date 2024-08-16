import React, { useState, useEffect, useContext } from "react";
import "../Header.css";
import ReactDOM from "react-dom";
import { REGISTER } from "../utils";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink, useNavigate} from 'react-router-dom';
import '../styles.css';
import ProductTileScreen from "./ProductTileScreen";
import Header from "./Header";
import ProductContext from "../AppContext/ProductsContext.jsx";


export default function ProductsListScreen()
{
    let navigate = useNavigate()

    const [products, setProducts]  = useContext(ProductContext);

    
    //const [products, setProducts] = useState([])
    
    useEffect( ()=>{
        setTimeout(() => {
            axios({
                // Endpoint to send files
                url: 'http://127.0.0.1:8000/products_api/products/',
                method: "GET",
                mode: 'cors',
                headers: {
                    // Add any auth token here
                    'Content-Type':"application/x-www-form-urlencoded",
                },     
                // Attaching the form data
                data: '',
            })
                // Handle the response from backend here
                .then((res) => {
                  let response = res.data
                    //console.log(response)
                    setProducts(response);
                    //console.log(products);
                
                })
                // Catch errors if any
                .catch((err) => {console.log(JSON.stringify(err, null, 2));});
    
          }, 400);    
      },[setProducts]); 


  function onButtonClick(index)
  {
    navigate('/product_detail_screen_redux',{ state: {index} })

    //this is working with useContext
   // navigate('/product_detail_screen',{ state: {index} })
  }    
  function renderTile()
   {
    let tiles = []
    for (let i = 0; i < products.length ; i++) {
        let product = products[i];
        tiles.push(
        <ProductTileScreen data = {product} index = {i} 
            onButtonClick = {() =>{ onButtonClick(i)}}></ProductTileScreen>
            );
    }

    return tiles;
    
}
    return (
        <div className="wrapper">
                <Header></Header>
            <div className="product-catalog">
            
            {renderTile()}
        </div>
        </div>

    )
}
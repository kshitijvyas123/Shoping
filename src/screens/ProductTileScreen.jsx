import React, { useState, useEffect } from "react";
import "../Header.css";
import ReactDOM from "react-dom";
import { REGISTER } from "../utils";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink, useNavigate} from 'react-router-dom';
import '../styles.css';
import ProductDetailScreen from "./ProductDetailScreen";



export default function ProductTileScreen({data, index,onButtonClick})
{
    

    return (
        <div className="card" style={{display:"flex"}}>
            <div className="card-image" style={{height:'200px', overflow:'hidden'}}>
                <figure className="image is-4by3" style={{height:'200px', overflow:'hidden'}} >
                    <img  src={`http://127.0.0.1:8000${data.image}`} style={{width: '100%',height: 'auto',display: 'block'} } 
                     alt="Placeholder"></img>
                </figure>
            </div>
            <div className="card-content">
                <p className="title product-title">{data.name}</p>

                <div className="content">
                    {data.price} INR
                    <br></br>
                </div>
                <button className="button.is-primary" onClick={()=>{ onButtonClick(index)}} target="_blank">
                    <strong>More Details</strong>
                </button>
            </div>
        </div>
    )
}
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
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink, useNavigate} from 'react-router-dom';
import * as yup from 'yup';




export default function ForgetPassword()
{
    const { Formik } = formik;
   // const [submitting, setSubmitting  ] = useState(false);


    const schema = yup.object().shape({
      email: yup.string().email().required()
      
    });


    const formikHandleSubmit = (values, { setSubmitting }) => {
             
      setTimeout(() => {
        axios({
            // Endpoint to send files
            url: 'http://127.0.0.1:8000/products_api/forgetpassword/',
            method: "POST",
            headers: {
                // Add any auth token here
                },
 
            // Attaching the form data
            data: values,
        })
            // Handle the response from backend here
            .then((res) => {
                alert(JSON.stringify(res, null, 2));

            })
 
            // Catch errors if any
            .catch((err) => {alert(JSON.stringify(err, null, 2));});
    
        setSubmitting(false);

      }, 400);

    }
    
    return (
      <div style={{marginTop:'50px', display : 'inline-block'}}>
        <h1>FORGET PASSWORD SCREEN</h1>
      <Formik
        validationSchema={schema}
        onSubmit={formikHandleSubmit}
        initialValues={{
          email: 'Mark',          
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Please Enter Your Registred Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button type="submit">Submit</Button>
      
    </Form>
  
        )}
      </Formik>
      </div>
    );
  }



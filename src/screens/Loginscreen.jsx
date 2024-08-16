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


export default function LoginUser()
{
    const { Formik } = formik;
    const navigate = useNavigate();
   // const [submitting, setSubmitting  ] = useState(false);


    const schema = yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required(),
      
    });


    const formikHandleSubmit = (values, { setSubmitting }) => {
      setSubmitting(true);      
      console.log(values)
      setTimeout(() => {
        axios({
            // Endpoint to send files
            url: 'http://127.0.0.1:8000/products_api/login/',
            method: "POST",
            mode: 'cors',
            headers: {
                // Add any auth token here
                'Content-Type':"application/x-www-form-urlencoded",
            },
 
            // Attaching the form data
            data: values,
        })
            // Handle the response from backend here
            .then((res) => {
              console.log(JSON.stringify(res, null, 2));
              //rediert to Login page to login
              navigate('/products_screen');


            })
 
            // Catch errors if any
            .catch((err) => {alert(JSON.stringify(err, null, 2));});
    
        setSubmitting(false);

      }, 400);

    }
    
    return (
      <div style={{marginTop:'50px',
       display : 'inline-block',
       
      }}>
       <h1>LOGIN SCREEN</h1> 
      <Formik
        validationSchema={schema}
        onSubmit={formikHandleSubmit}
        initialValues={{
          username: '',
          password: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="validationFormik01">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" 
        name="username"
        onChange={handleChange}
        value={values.username}
        isInvalid={!!errors.username}
        placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange} 
                      placeholder="Password"
                      isInvalid={!!errors.password}
                      />
      </Form.Group>
      <Button type="submit">Login</Button>
      <row className='app'>
            <NavLink  className={isActive =>
           "nav-link" + (!isActive ? " unselected" : "")
            } to="/forgetpassword">Forgot Password!</NavLink>
      </row>
      <row className='app'>
            <NavLink  className={isActive =>
           "nav-link" + (!isActive ? " unselected" : "")
            } to="/register">New User! Click Here</NavLink>
      </row>
    </Form>
  
        )}
      </Formik>
      </div>
    );
  }


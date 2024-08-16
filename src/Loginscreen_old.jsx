import React, { useState, useEffect } from "react";
import "./Header.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ReactDOM from "react-dom";
import { REGISTER } from "./utils";
import axios from "axios";

import { Button } from 'react-bootstrap';

export default function RegisterUser()
{
    const body = {firstname:'kv',lastname:'vyas',username:'vyasvaid',email:'engvyas@gmail.com'};

    
       return (
        <div>
     
          <h1>Any place in your app!</h1>
     
          <Formik
     
            initialValues={{ username: '',firstname: '',lastname:'', email: '', password: '' }}
     
            validate={values => {
     
              const errors = {};
              if(!values.username){
                errors.username = 'Required';
              }
     
              if (!values.email) {
     
                errors.email = 'Required';
     
              }
              if (!values.firstname) {
     
                errors.firstname = 'Required';
     
              }
              if (!values.lastname) {
     
                errors.lastname = 'Required';
     
              }
              else if (
     
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
     
              ) {
     
                errors.email = 'Invalid email address';
     
              }
     
              return errors;
     
            }}
            
            onSubmit={(values, { setSubmitting }) => {
             
            

              setTimeout(() => {

    
                axios({
                    // Endpoint to send files
                    url: 'http://127.0.0.1:8000/products_api/register/',
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
     
            }}
     
          >
     
            {({ isSubmitting }) => (
     
              <Form>
                
                <Field placeholder = "username" type="text" name="username" />
                <Field placeholder = "firstname" type="text" name="firstname" />
                <Field placeholder = "lastname" type="text" name="lastname" />


                <Field placeholder = "email" type="email" name="email" />
     
                <ErrorMessage name="email" component="div" />
     
                <Field placeholder = "password" type="password" name="password" />
     
                <ErrorMessage name="password" component="div" />
     
                <button type="submit" disabled={isSubmitting}>
     
                  Submit
     
                </button>
     
              </Form>
     
            )}
     
          </Formik>
     
        </div>
     
      );

}


// export default function RegisterUser ({userData})
// {
//     function validatePassword(input)
//     {

//     }
            
//         const [input, setInput] = useState(null);
    
//         return(
//         <span>
//        <label>Register User</label>
//        <div>

//        <input height={50} width={100} placeholder='username'
//         onChange={ (e) =>
//           setInput({...input,username : e.target.value}) 
//         }></input>
//        <input height={50} width={100} placeholder='email'
//        onChange={ (e) =>
//         setInput({...input,email : e.target.value})
//        }></input>
//        <input height={50} width={100} placeholder='passowrd'
//        onChange={ (e) =>
//         setInput({...input,password : e.target.value})
//        }></input>
//        <input height={50} width={100} placeholder='confirm password'
//        onChange={ (e) =>
//         setInput({...input,confirm_password : e.target.value})
//        }></input>
//        <button onClick={() =>
//          userData(input)}> Register</button>
//        </div>
//        </span>
//      )}

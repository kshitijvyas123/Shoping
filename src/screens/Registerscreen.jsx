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

export default function RegisterUser()
{
    const body = {firstname:'kv',lastname:'vyas',username:'vyasvaid',email:'engvyas@gmail.com'};
    const { Formik } = formik;
    const navigate=useNavigate()

    const schema = yup.object().shape({
      first_name: yup.string().required(),
      last_name: yup.string().required(),
      username: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
      terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    const formikHandleSubmit = (values, { setSubmitting }) => {
      setSubmitting(true);      
      setTimeout(() => {
        axios({
            // Endpoint to send files
            url: 'http://127.0.0.1:8000/products_api/register/',
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
              navigate('/login');


            })
 
            // Catch errors if any
            .catch((err) => {alert(JSON.stringify(err, null, 2));});
    
        setSubmitting(false);

      }, 400);

    }
  
    return (
      <div style={{marginTop:'50px', display : 'inline-block'}}>
        <h1>REGISTRATION SCREEN</h1>
      <row style ={{width : 200}}>
      <Formik 
      
        validationSchema={schema}
        onSubmit={ formikHandleSubmit}
        initialValues={{
          first_name: 'Mark',
          last_name: 'Otto',
          username: '',
          email : '',
          password: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Row} md="1" controlId="validationFormik01">
              <Form.Label>UserName</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isValid={touched.username && !errors.username}
                />
                </Form.Group>
                <Form.Group as={Row} md="1" controlId="validationFormik02">
                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  isValid={touched.first_name && !errors.first_name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Row} md="1" controlId="validationFormik03">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  isValid={touched.last_name && !errors.last_name}
                />
  
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Row} md="1" controlId="validationFormik04">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            //isValid={touched.password && !errors.password}
            isInvalid={!!errors.password}
            onChange={handleChange}
            name="password" placeholder="Secret" />
            <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
      </Form.Group>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Register</Button>
            <row className='app'>
              <Form>
            <NavLink  className={isActive =>
           "nav-link" + (!isActive ? " unselected" : "")
            } to="/login">Already a user! Click here</NavLink>
        </Form> 
      </row>
          </Form>
        )}
      </Formik>
      </row>
      
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

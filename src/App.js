import logo from './logo.svg';
import React from 'react'
import store from './app/store.js'
import { useState } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import {Header} from './screens/Header.jsx'
import NavigationHeader from './Navigationheader.jsx';
import Cartitems from './screens/Cartitems.jsx';
import CartHeadings from './screens/Cartheading.jsx';
import { Registerapi } from './apis/api';
import RegisterUser  from './screens/Registerscreen';
import LoginUser from './screens/Loginscreen';
import Forgetpassword from './screens/Forgetpassword';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import ProductsListScreen from './screens/ProductsListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import Background from './assets/background.jpg';
import ProductContext from './AppContext/ProductsContext';
import CartContext  from './AppContext/CartContext';
import ProductDetailScreen_redux from './screens/ProductDetailScreen_redux.jsx';

function App() {
  const rootProps=  {authToken:'', setAuthToken:''} //authToken:authToken, setAuthToken:setAuthToken
  const [products, setProducts] = useState([])
  const [cartItems, setCartItems] = useState(0)



  return(

    <React.StrictMode>    
    <Provider store={store}>
    <ProductContext.Provider value={[products, setProducts]} >
    <CartContext.Provider value={[cartItems, setCartItems]} >

    <BrowserRouter>
     <div className='App'
     style={{background: `url(${Background})`,
     backgroundPosition: 'center',
     backgroundSize: 'cover',
     display:'flex',
     justifyContent: 'center',
     alignItems: 'center',  
     backgroundRepeat: 'no-repeat'}}
     >
     <Routes>
     <Route path="/" index element={<RegisterUser rootProps={rootProps} />} />
     <Route path="/register" index element={<RegisterUser rootProps={rootProps} />} />
     <Route path="/login" index element={<LoginUser rootProps={rootProps} />} />
     <Route path="/forgetpassword" index element={<Forgetpassword rootProps={rootProps} />} />
     <Route path="/products_screen" index element={<ProductsListScreen rootProps={rootProps} />} />
     {/* <Route path="/product_detail_screen" index element={<ProductDetailScreen rootProps={rootProps} />} /> */}
     <Route path="/product_detail_screen_redux" index element={<ProductDetailScreen_redux rootProps={rootProps} />} />
     <Route path="/cart" index element={<Cartitems rootProps={rootProps} />} />

     
      {/* <Header data={sculptureList}></Header> */}
      
      </Routes>
       </div>
       </BrowserRouter>
       </CartContext.Provider>
       </ProductContext.Provider>
       </Provider>
       </React.StrictMode>
      )
  // return (
  //    <div className='App'>
  //    <Header data={sculptureList}></Header>
  //    <NavigationHeader></NavigationHeader>
  //    <div className='wrapper'>
  //    <CartHeadings></CartHeadings> 
  //    <Cartitems cartItems={sculptureList}></Cartitems>
  //    </div>
  //    </div>
  // );
}

export default App;

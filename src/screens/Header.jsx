import React, { useState, useEffect,useContext } from "react";
import "../Header.css";
import { CSSTransition } from "react-transition-group";
import ReactSearchBox from "react-search-box";
import Cartitems from "../screens/Cartitems";
import CartContext from "../AppContext/CartContext";
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom';



export default function Header({data}) {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const cartItems = useContext(CartContext)
    console.log("-----------in the header--------")
    console.log(cartItems[0]);
    const cartItem = useSelector(state => state.products.cartItems)
    console.log(" in the header cart item is")
    console.log(cartItem)
    const [name, setName] = useState(' ')
    let navigate = useNavigate()

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addEventListener(true, handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
    
        return () => {
          mediaQuery.removeEventListener(true, handleMediaQueryChange);
        };
      }, []);
    
      const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
          setIsSmallScreen(true);
        } else {
          setIsSmallScreen(false);
        }
      };
    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
      };
    
    function cartClick()
    {
      navigate('/cart')
    
    }
    
     function handleKeyPress(e)
     {
        if (e.key === 'Enter') {
            alert(e.target.value)
          }
     }
return(
    <header className="Header">
    <img src={require("../assets/sitelogo.png")} className="Logo" alt="logo" />
    <CSSTransition
      in={!isSmallScreen || isNavVisible}
      timeout={350}
      classNames="NavAnimation"
      unmountOnExit
    >
      <nav className="Nav">
        <input className="SearchBox"
        placeholder='Type Name...'
        onChange={e => setName(e.target.value)}
        onKeyDown={e => handleKeyPress(e)}
        value={name}
        />
        <a href="/">Lession Plans</a>
        <div style={{display:'block'}}>
        <div style={{display:'flex'}}>  
        <text style={{color:'white', alignContent:'center' }}>Cart</text>
        {/* with redux */}
        <text style={{color:'white', alignContent:'center' }}>{cartItem}</text>  

        {/* //with app Context */}
        {/* <text style={{color:'white', alignContent:'center' }}>{cartItems[0]}</text>   */}
        </div>
        <a onClick= {()=>{cartClick()}}>
        <img  src={require("../assets/trolley.png")} 
        style= {{ alignContent:'center', backgroundColor:'white',width: 40,height:40}} className="Logo" alt="cart"/>
        </a>
        </div>
        
        {/* <a href="/">My Smart Course</a> */}
        {/* <a href="/">My meetings</a> */}
        <button>Logout</button>
      </nav>
    </CSSTransition>
    <button onClick={toggleNav} className="Burger">
      🍔
    </button>
  </header>
);

}
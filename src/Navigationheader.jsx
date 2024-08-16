import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";

export default function NavigationHeader()
{
    
    return(
        <>
        <header className="Indexheader">
        <nav className="Nav">
        <a href="/">Home</a>
        <a href="/">Cars and Motor Bikes</a>
        <a href="/">Show By Vehicle</a>
        </nav>
        </header>
        </>
    )
}
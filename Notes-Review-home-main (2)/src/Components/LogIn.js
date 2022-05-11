import React from 'react'
import { Link } from 'react-router-dom'


export default function LogIn() {
    return (
        <>
            <div className="log-in-box">
            <div className="notes-nav-top-head"><span style={{fontWeight: "bold"}}>Notes</span>hub</div>
            <Link to="/signInForm">  <button tupe="button" className="log-in-top-btn">Create Account</button> </Link>
                <div className="log-in-con" >
                    Have your best notes <br />
                    <span style={{fontSize: "15px"}}> Fast, easy &amp; unlimited notes</span>
                </div>
               <Link to="/logInForm"> <button tupe="button" className="log-in-btn">Log In</button> </Link>
                <Link to="/signInForm">  <button tupe="button" className="sign-in-btn">Sign In</button> </Link>
                <img src="src\Components\Group 21 (1).png" alt="background" className="backg-img" />
                <Link to="/search">  <button tupe="button" className="sign-in-btn search-btn">Search</button> </Link>
            </div>
        </>
    )
}

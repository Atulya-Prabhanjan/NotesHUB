import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const useFormInput = initialvalue => {
    const [value, setValue] = useState(initialvalue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return { value, onChange: handleChange };
}

export default function SignInButton() {
    const username = useFormInput('');
    const name = useFormInput('');
    const mail = useFormInput('');
    const number = useFormInput('');
    const pass = useFormInput('');
    const handleSignup = () => {
        axios.post("http://localhost:5000/user", {
            "username": username.value,
            "name": name.value,
            "mail": mail.value,
            "pass": pass.value,
            "number": number.value
        }).then(response => {
            alert("User registered successfully!");
        }).catch(error => {
            alert("Error");
        })
    }
    return ( 
        <div className = "lightbox" >
        <div className = "log-in-btn-box sign-in-btn-box" >
        <img className = "log-in-icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupwmCC0rO41tqGSaeTQNk6Kso9XgNNa89vg&usqp=CAU" alt = ""/>
        <div className = "note-head" > NotesHUB</div> 
        <Link to = "/" > <img className = "log-cross" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx_5Auv6KmlC8_iD9xwhwTjxV0U624mlvA&usqp=CAU" alt = ""/>
        </Link> 
        <input type = "text" {...name } className = "log-in-input sign-in-input" placeholder = "Full Name"/>
        <input type = "text" {...mail } className = "log-in-input sign-in-email" placeholder = "Email"/>
        <input type = "text" {...number } className = "log-in-input sign-in-phone" placeholder = "Phone No."/>
        <input type = "text" {...username } className = "log-in-input sign-in-user" placeholder = "Set a Username"/>
        <input type = "password" {...pass } className = "log-in-input pass-sign-input" placeholder = "Password"/>
        <Link to="/logInForm"><button className = "log-in-box-btn sign-box-btn" onClick = { handleSignup } > Sign Up </button></Link>
        <div className = "need-acc" > Already have an account ? < Link to = "/logInForm" > Log In </Link> </div >
        </div> 
        </div >
    )
}
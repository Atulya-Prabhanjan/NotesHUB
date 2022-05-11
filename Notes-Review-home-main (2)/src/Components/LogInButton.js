import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const useFormInput = initialvalue => {
    const [value, setValue] = useState(initialvalue);
    const handleChange = e => {
        setValue(e.target.value);
    }
    return { value, onChange: handleChange };
}

export default function LogInButton({setToken}) {
    const username = useFormInput('');
    const pass = useFormInput('');
    const handleLogin = () => {
        axios.post("http://localhost:5000/login", {
            "username": username.value,
            "pass": pass.value,
        }).then(response => {
            alert("User loged in successfully!");
            console.log("token: " + JSON.stringify(response.data));
            setToken(response.data.token);
        }).catch(error => {
            console.log("error: ");
            console.log (error);
            if (error.response.status === 401) {
                alert("Entered Credentials Incorrect!")
            } else {
                alert("Error");
            }
        })
    }
    return ( 
        <>
            <div className = "lightbox" >
                <div className = "log-in-btn-box" >
                    <img className = "log-in-icon" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupwmCC0rO41tqGSaeTQNk6Kso9XgNNa89vg&usqp=CAU" alt = "" / >
                    <div className = "note-head" > NotesHUB</div>  
                    <Link to = "/" > < img className = "log-cross"src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx_5Auv6KmlC8_iD9xwhwTjxV0U624mlvA&usqp=CAU"alt = "" /> </Link> 
                    <hr/>
                    <div className = "log-in-text" > Log In to your Account </div> 
                    <input type = "text" {...username }
                        className = "log-in-input"
                        placeholder = "Username"/>
                    <input type = "password" {...pass }
                        className = "log-in-input pass-log-input"
                        placeholder = "Password"/>
                    <button className = "forgot-password" > Forgot Password ? </button> 
                    <Link to="/"><button className = "log-in-box-btn" onClick = { handleLogin } > Log In </button> </Link>
                    <div className = "need-acc" > Need an account ? < Link to = "/signInForm" > Sign Up </Link> </div >
                </div>   
            </div>
        </>
    )
}

LogInButton.propTypes = {
    setToken: PropTypes.func.isRequired
}
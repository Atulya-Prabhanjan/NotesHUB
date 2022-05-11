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

export default function uploadNotes() {
    const token = getToken();
    const author = useFormInput('');
    const subject = useFormInput('');
    const description = useFormInput('');
    const tags = useFormInput('');
    const handleUploadNotes = () => {
        axios.post("http://localhost:5000/notes", {
            "author": author.value,
            "subject": subject.value,
            "description": description.value,
            "tags": tags.value,
            "sessionToken": token
        }).then(response => {
            alert("Notes uploaded Successfully!");
        }).catch(error => {
            alert("Error");
        })
    }
    return ( 
        <div className="body">
            <div className="light">
                <div className="box btn-box">
                    <img className="icon"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupwmCC0rO41tqGSaeTQNk6Kso9XgNNa89vg&usqp=CAU"
                        alt=""/>
                    <div className="head"> Noteshub</div>
                    <Link to="/"><img className = "log-cross" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bx_5Auv6KmlC8_iD9xwhwTjxV0U624mlvA&usqp=CAU" alt = ""/></Link>
                    <input type="file" className="change"/>
                    <p className="tst1">Author </p>
                    <input type=" text" {...author} className="input in-input" placeholder="Enter author name " />
                    <p className="tst2">Subject</p>
                    <input type="text" {...tags} className="input in-email" placeholder="Enter tags" />
                    <p className="tst3">Tags</p>
                    <input type="text" {...description} className="input in-phone" placeholder="Enter Description" />
                    <p className="tst4">Description</p>
                    <input type="text" {...subject} className="input in-user" placeholder="Enter subject " />
                    <Link to="/"><button className="btn box-btn" onClick = {handleUploadNotes}> Upload </button></Link>
                </div>
            </div>
        </div>
    )
}

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  console.log ("Token String" + tokenString);
  const userToken=JSON.parse(tokenString);  
  console.log ("userToken" + userToken);
  return userToken;
}
import React from 'react'
import axios from 'axios';
import Comments from "./Comments"

export default class Search extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        results: [],
        listOfNotes: '',
        queryString: '',
        rating:0,
        comments:'',
        com:[]
        }
    }

    onInputchange = (event) => {
        this.setState({
            queryString: event.target.value
        });
    }

    rateInput = () => {
        this.setState({
            rating: event.target.value
        });
    }

    commentInput = () => {
        this.setState({
            comments: event.target.value
        });
    }

    getRate = (evt) =>{
        console.log("Get Rate called for note id ", evt.target.value);
        return(<div>
        <input type = "text"  className = "log-in-input sign-in-input" placeholder = "Rating"/>,
        <input type = "text"  className = "log-in-input sign-in-email" placeholder = "Comments"/>,
        <button className = "view-button">submit Ratings</button></div>
        );
    }

    rateNotes = (noteID) => {
        console.log(" Note ID: " + noteID);
        const token = getToken();
        axios.post('http://localhost:5000/rate',{
            "sessionToken": token,
            "noteid": noteID,
            "rating": this.state.rating,
            "comments": this.state.comments
        }).then(response => {
            alert("Opinions uploaded successfully!");
        }).catch(error => {
            alert("Error");
        })
    };

    getNotesData = () => {
        var URLString = 'http://localhost:5000/notes?search=' + this.state.queryString;
        axios.get(URLString).then(response => {
            console.log(response.data);
            var notes = response.data;
            for (let note of notes) {
                console.log(note);
                if (note.rating >= 7.5) {
                    note.className = 'green';
                } else if (note.rating < 5) {
                    note.className = 'red';
                } else {
                    note.className = 'yellow';
                }
            }
            this.setState({ results: notes })
        }).catch(error => {
            console.log(error);
            alert("No Data found!");
        })
    };

    renderResults = () => {
        const notes = this.state.results;
        let listOfNotes = '';
        if (notes && notes.length > 0) {
            listOfNotes = notes.map((note, idx) =>{
                return( <div className = "search-upload-box" key = { note.noteid } >
                    <div className = "description" > Description: { note.description } </div> 
                    <div className = "author" > Author: { note.author } </div> 
                    <div className = "subject" > Subject: { note.subject } </div> 
                    <div className = { note.className } > Average Rating: { note.rating } </div>
                    <button className = "view-button" >view</button>  
                    <button value={note.noteid} className = "rate-button" onClick = {this.getRate}>rate</button>   
                    <button value={note.noteid} className = "comment-button" >comments</button> 
                    <button className = "delete-button" >delete</button> 
                    <Comments noteid = {note.noteid}/>
                    <div className = "extra-space" > </div> 
                </div> );
            })
        }
        return(<div>{listOfNotes}</div>);
    }

    render() {
        return ( 
            <>
                <div className = "search-back" >
                    <div className = "search-head" > NotesHub Search / View Page </div>   
                    <input type = "search"
                        onChange = { this.onInputchange }
                        className = "search-bar"
                        placeholder = "Search for notes.." />
                    <button className = "search-button"
                        onClick = { this.getNotesData } > Submit </button>
                    <div className = "searchResult" ></div> 
                    <div className = "search-choose" > Choose a document: - </div> { this.renderResults() } 
                </div> 
            </>
        )
    }
}

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  console.log ("Token String" + tokenString);
  const userToken=JSON.parse(tokenString);  
  console.log ("userToken" + userToken);
  return userToken;
}
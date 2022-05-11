import React from 'react';
import axios from 'axios';

export default class Comments extends React.Component{
        constructor (props) {
            super(props);
            this.state = {};        
        }

        fetchComments = (URLString) => {
            var response;

            axios.get(URLString).then(response => {
                    this.setState ({comments:response.data});
                    console.log ("Response Received ")
                    console.log(response.data);
                }).catch(error => {
                    console.log(error);
                    alert("No Data found!");
                });
        }

        getCommentsList=(noteId)=> {

            var URLString = 'http://localhost:5000/rate?noteid=' + noteId;
            let listOfComments = '';
            try {
                const response =this.fetchComments(URLString);
                var comments = this.state.comments;
                if (comments && comments.length > 0) {
                    listOfComments = comments.map((comment, idx) =>
                        <div className = "comments-box" key = { idx } >
                            <h3 className = "description" >{ comment.username }:- </h3> 
                            <p className = "author" >{ comment.comments } </p> 
                        </div>);
                }
            }      
            catch(error) {
                console.log(error);
                alert("No Data found!");
            }
            console.log('list of comments', listOfComments);

        }

        render () {
            return (
                <div> <h2>Comments:-</h2>{ this.getCommentsList(this.props.noteid) } </div>
            );
        }

}


import React, { Component } from "react";

const url = 'http://localhost:8080/delete/1';
class DeleteComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

    handleClick = (user,text) => {
        console.log(user,text);
        const requestOptions = {
          method: 'DELETE'
        };
    //user+text is the user's name and text body
        fetch(url + user+text, requestOptions).then((response) => {
          return response.json();
        }).then((result) => {
          console.log('successful delete')
        });
      }

    render(){
        return(
            <div>
                { this.handleClick(this.props.user, this.props.text) }
            </div>
        );
    }
}

export default DeleteComment;


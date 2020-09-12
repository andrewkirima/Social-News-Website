import React, { Component } from "react";

const url = 'http://localhost:8080/delete/1';
class DeleteArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
   
    handleClick = title => {
        console.log(title);
        const requestOptions = {
          method: 'DELETE'
        };
    
        fetch(url + title, requestOptions).then((response) => {
          return response.json();
        }).then((result) => {
          console.log('successful delete')
        });
      }

    render(){
        return(
            <div>
                { this.handleClick(this.props.title) }
            </div>
        );
    }
}

export default DeleteArticle;



/*
handleClick = userId => {
  const requestOptions = {
    method: 'DELETE'
  };

  // Note: I'm using arrow functions inside the `.fetch()` method.
  // This makes it so you don't have to bind component functions like `setState`
  // to the component.

  fetch(url + '/'+id).then((response) => {
    return response.json();
  }).then((result) => {
    console.log('Delete successful');
  });
}



function remove(id){
  fetch(apiUrl + "/" + id, {
    method: 'DELETE'
  }).then(() => {
     console.log('removed');
  }).catch(err => {
    console.error(err)
  });
*/
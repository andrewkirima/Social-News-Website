import React, {Component} from 'react';
import CommentList from './CommentListings';

const url = "http://localhost:6800/comments"; //temp url hosting on json server

class Comments extends Component { //class component
    constructor(props){ //initialized the component
        super(props)
        this.state ={ //state 
            comments: ''
        }
    }
    componentDidMount(title){ 
        fetch(url,{method:'GET'})  //add url + title fetch data from specific endpt /comments/nameOfArticle
        .then((response) => response.json())
        .then((data) => { 
            this.setState({ 
                comments:data
            })
        })
    }
    render(){ 
        console.log(this.state.comments); 
        return( 
            <div>
                
                <CommentList commentList={this.state.comments}/>
            </div>
        )
    }
}

export default Comments;

// json-server --watch db3.json --port 6800
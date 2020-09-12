import React, {Component} from 'react';
import ArticleList from './ArticleListings';

const url = "http://localhost:6700/articles"; //temp url hosting on json server

class Articles extends Component { //class component
    constructor(){ //initialized the component
        super()
        this.state ={ //state 
            articles: ''
        }
    }
    componentDidMount(){ 
        fetch(url,{method:'GET'})  
        .then((response) => response.json())
        .then((data) => { 
            this.setState({ 
                articles:data
            })
        })
    }
    render(){ 
        console.log(this.state.articles); 
        return( 
            <div>
                <ArticleList articleList={this.state.articles}/>
            </div>
        )
    }
}

export default Articles;
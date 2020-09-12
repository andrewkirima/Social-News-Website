import React from 'react';
import './ArticleListings.css'
import EditArticle from './EditArticle';
import DeleteArticle from './DeleteArticle';
import PostArticle from './PostArticle';
import { render } from '@testing-library/react';
import Comments from '../Comments/Comments';

const ArticleList = (articleList) => { //functional component
    
    function handleEdit(id) {
        console.log(id);
        render (
           <div>
                <EditArticle userID={id}/> 
           </div>
        );
    }
    function handleDelete(title) {
        render (
           <div>
                <DeleteArticle title={title}/> 
           </div>
        );
    }
    function handleGet(title) {
        render (
           <div>
                <Comments title={title}/> 
           </div>
        );
    }
    const renderList = ({articleList}) => { 
        if(articleList){
            return articleList.map((data) => {  
                return( 
                        <div className="rowCard">
                            {/* var userID = {data.id}; */}
                            <div className="id">
                                {data.id}
                            </div>
                            <div>
                                <a href={data.link}>{data.title}</a>
                            </div>
                            <div>
                                Posted by - {data.user}
                            </div>
                            <div>
                                Upvotes {data.upvotes}
                            </div>
                            <div>
                                <button onClick={() => handleEdit(data.id)}>Update</button>
                                <button onClick={() => handleDelete(data.title)}>Delete</button>
                                <button onClick={() => handleGet(data.title)}>Comments</button>

                            </div>
                            
                        </div>
                )  
            })
        }  
    }
    return( 
        <div className="container">
            <div  className="rowCard">
                {renderList(articleList)}  
            </div>
        </div>
    )
}

export default ArticleList;
import React from 'react';
import DeleteComment from './DeleteComment';
import EditComment from './EditComment';
import { render } from '@testing-library/react';

const CommentList = (commentList) => { //functional component

    function handleEdit(id) {
        console.log(id);
        render (
           <div>
                <EditComment userID={id}/> 
           </div>
        );
    }
    function handleDelete(user, text) {
        render (
           <div>
                <DeleteComment 
                user={user} 
                text={text}
                /> 
           </div>
        );
    }



    const renderList = ({commentList}) => { 
        if(commentList){
            return commentList.map((data) => {  
                return( 
                        <div className="rowCard">
                            <div className="id">
                            {data.id}
                            </div>
                            <div>
                                {data.user}
                            </div>
                            <div>
                                hello
                                {data.post_title}
                            </div>
                            <div>
                               Comment: {data.text}
                            </div>
                            <div>
                                Upvotes {data.upvotes}
                            </div>
                            <div>
                                <button onClick={() => handleEdit(data.id)}>Update</button>
                                <button onClick={() => handleDelete(data.user,data.text)}>Delete</button>
                            </div>
                        </div>
                )  
            })
        }  
    }
    return( 
        <div className="container">
            <div  className="rowCard">
                {renderList(commentList)}  
            </div>
        </div>
    )
}

export default CommentList;
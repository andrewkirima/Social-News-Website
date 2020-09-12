import React, { Component } from 'react'
const url = 'http://localhost:8080/add/comment';

class PostComment extends Component {
	constructor(props) {
		super(props)

		this.state = {
			
            user: '',
			text: '',
			post_title: '',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
        console.log(this.state)
        var formData = new FormData();
        formData.append('user', this.state.user);
		formData.append('text', this.state.link);
		formData.append('post_title', this.state.post_title);


        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => { response.json()})

        .catch(error => {
            console.log('Error: ', error)
        })
        .then(response => console.log('Success: ', JSON.stringify(response)))
	}

	render() {
		const { user, text ,post_title } = this.state
		return (
			<div>
                <h2>Leave a Comment!</h2>
				<form onSubmit={this.submitHandler}>
                    <div>
                        User
						<input
							type="text"
							name="user"
							value={user}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
                        Post Title:
						<input
							type="text"
							name="post_title"
							value={post_title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
                        Comment:
						<input
							type="text"
							name="text"
							value={text}
							onChange={this.changeHandler}
						/>
					</div>
					
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostComment;
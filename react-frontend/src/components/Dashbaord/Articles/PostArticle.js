import React, { Component } from 'react'
const url = 'http://localhost:8080/add/article';

class PostArticle extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			link: '',
			user: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
        console.log(this.state)
        var formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('link', this.state.link);
        formData.append('user', this.state.user);

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
		const { title, link, user } = this.state
		return (
			<div>
                <h2>Post an Article!</h2>
				<form onSubmit={this.submitHandler}>
					<div>
                        Title of Article:
						<input
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
                        Article Link:
						<input
							type="text"
							name="link"
							value={link}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
                        User Name:
						<input
							type="text"
							name="user"
							value={user}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostArticle;
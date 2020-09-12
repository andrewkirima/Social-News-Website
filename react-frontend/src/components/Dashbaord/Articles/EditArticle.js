import React , { Component }from "react";

const url = 'http://localhost:8080/put/1';

class EditArticle extends Component {
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

	submitHandler = userID => {
        console.log(this.state)
        var formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('link', this.state.link);
        formData.append('user', this.state.user);

        fetch(url + userID, {   //userid stores the id of the post user wanted to update
            method: 'PUT',
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
                <h2>Update an Post!</h2>
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
					<button type="submit">Update</button>
				</form>
			</div>
		)
	}
}
export default EditArticle;

/*
function update(id, data){
  fetch(apiUrl + "/" + id, {
    method: 'PATCH',
    body: JSON.stringify({
     data
    })
  }).then((response) => {
    response.json().then((response) => {
      console.log(response);
    })
  }).catch(err => {
    console.error(err)
  })

  

*/
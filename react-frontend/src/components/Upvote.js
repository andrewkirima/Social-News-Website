import React, { Component } from 'react';

class Upvote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count = 0
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return(
            <div>
                <button onClick={this.increment} className="counter">Upvote</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}
import React, { Component } from 'react';

export class SinglePeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: {}
        }

    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(people => this.setState({
                people: people
            }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div key={this.state.people.id}>
                <h1 style={{background: 'lightgrey', border: '2px solid black', width: '500px'}}>{this.state.people.name}</h1>
                <p style={{background: 'whitesmoke', border: '2px solid lightgrey', width: '100px'}}>{this.state.people.gender}</p>
                <p style={{background: 'whitesmoke', border: '2px solid lightgrey', width:'100px'}}>{this.state.people.age}</p>
            </div>

        )
    }
}

export default SinglePeople

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export class ViewPeople extends Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }

    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(response => response.json())
            .then(people => this.setState({
                people: people
            }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                {this.state.people.map(people => {
                    return (
                        <div key={people.id}>
                            <h1 style={{ marginBottom: '10px', marginTop: '10px', marginLeft: '5px', background: 'lightgrey', border: '2px solid black', width: '500px'}}>{people.name}</h1>
                            <Link to={`/people/${people.id}`}>
                                <Button style={{marginLeft: '5px'}} variant="secondary">Learn More</Button>
                            </Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ViewPeople
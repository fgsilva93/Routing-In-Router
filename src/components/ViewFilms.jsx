import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

export class ViewFilms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films: []
        }

    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(response => response.json())
            .then(films => this.setState({
                films: films
            }))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                {this.state.films.map(films => {
                    return (
                        <div key={films.id}>
                            <h1 style={{ marginBottom: '10px', marginTop: '10px', marginLeft: '5px', background: 'lightgrey', border: '2px solid black', width: '500px'}}>{films.title}</h1>
                            <Link to={`/films/${films.id}`}>
                                <Button style={{marginLeft: '5px'}} variant="secondary">Learn More</Button>
                            </Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ViewFilms

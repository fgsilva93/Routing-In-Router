import React, { Component, Fragment } from 'react';
// import SinglePeople from './SinglePeople';

export class SingleFilm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            film: {}
        }
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(film => this.setState({
                film: film
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Fragment>
                <div style={{marginTop: '10px'}} className="card" key={this.state.film.id}>
                    <div className="card-body">
                        <h1 className="card-title" style={{ background: 'lightgrey', border: '2px solid black', width: '500px' }}>{this.state.film.title}</h1>
                        <p className="card-text" style={{ background: 'whitesmoke', border: '2px solid lightgrey' }}>{this.state.film.description}</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default SingleFilm

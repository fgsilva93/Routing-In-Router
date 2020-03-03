import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import ViewFilms from './ViewFilms';
import ViewPeople from './ViewPeople';
import SingleFilm from './SingleFilm';
import SinglePeople from './SinglePeople';
import {Button} from 'react-bootstrap';


export class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Button variant="secondary mr-2 mt-2 ml-2"><Link style={{color: 'white'}} to="/">Go Home</Link></Button>
                    <Button variant="secondary mr-2 mt-2"><Link style={{color: 'white'}} to="/films">View Flims</Link></Button>
                    <Button variant="secondary mr-2 mt-2"><Link style={{color: 'white'}} to='/people'>View People</Link></Button>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/films" component={ViewFilms} />
                        <Route exact path="/films/:id" component={SingleFilm} />
                        <Route exact path="/people" component={ViewPeople} />
                        <Route exact path="/people/:id" component={SinglePeople} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App

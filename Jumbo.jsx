import React from 'react';
import {Jumbotron, Button} from 'reactstrap';

export default class Jumbo extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h1 className="display-3">Cinema Web Movie </h1>

                <p>The Best Place to Choose a Great Movie!</p>
                <p className="lead">
                <Button color="primary">Start Selecting Movies</Button>
                </p>
          </Jumbotron>
        )
    }
}


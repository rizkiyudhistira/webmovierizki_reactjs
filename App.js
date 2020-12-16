import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Form, Label, Input } from 'reactstrap';
//import {
//  CardImg, CardTitle, CardText, CardDeck,
//  CardSubtitle, CardBody
//} from 'reactstrap';
import Header from './Header';
import Jumbo from './Jumbo';
import Thumbnail from './Thumbnail';
//import AutoComplete from "./AutoComplete";


class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Form />
        <Jumbo />         
        <Thumbnail />
      </div>
    );
  }
}

export default App;


class Footer extends Component {
  render() {
    return (
      <div>
        <p>Ini footer</p>
      </div>
    )
  }
}

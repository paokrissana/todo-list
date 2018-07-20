import React, { Component } from 'react';
import './App.css';
import { Route,Link } from 'react-router-dom';
import {Button,ButtonToolbar} from 'react-bootstrap';
import Routing from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button className="marginButtonApp" bsStyle = 'primary'> <Link className = "textButton"  to="/">Show</Link></Button>
        <Button className="marginButtonApp" bsStyle = 'success'> <Link  className = "textButton" to="/add">Add</Link></Button>
        <Button className="marginButtonApp" bsStyle = 'warning'> <Link  className = "textButton" to="/update">Update</Link></Button>
        <Button className="marginButtonApp" bsStyle = 'danger'> <Link  className = "textButton" to="/remove">Remove</Link></Button>
        <Button className="marginButtonApp" bsStyle = 'info'> <Link  className = "textButton" to="/mark">Mark</Link></Button>

        <Routing />
      </div>
    )
  }
}

export default App;

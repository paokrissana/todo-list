import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ShowAll from '../todo/showAll';
import AddTodo from '../todo/addTodo';
import UpdateTodo from '../todo/updateTodo';
import RemoveTodo from '../todo/removeTodo';
import Mark from '../todo/markAsComplete';

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
const Post = () => <h1>Post</h1>
const Project = () => <h1>Project</h1>

export default () => (
  <Switch>
    <Route exact path="/" component={ShowAll} />
    <Route exact path="/add" component={AddTodo} />
    <Route exact path="/update" component={UpdateTodo} />
    <Route exact path="/remove" component={RemoveTodo} />
    <Route exact path="/mark" component={Mark} />
  </Switch>
)

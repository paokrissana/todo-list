import React, { Component } from 'react';
import {
Button,
ButtonToolbar,
Form,
FormGroup,
ControlLabel,
Col,
FormControl,
Row,
Table
} from 'react-bootstrap';
import '../App.css';
import {Link } from 'react-router-dom';

class showAll extends Component {
  constructor(props) {
    super(props);
      this.state = {
          todo : [],
          id: ''
      }
  }

  componentDidMount() {
    return fetch('http://203.170.129.84/dormitory/backend/backendapp/todoBackend/showAllTodo.php')
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({
          todo : responseJson
        });
      })
      .catch((error) => {
         console.error(error);
      });
  }

    handleClick(id,e){
    alert("id iss " + id);
  }


  render() {
    return (
      <div>
      <h1>Show all TODO List</h1>
      <p>All of the todo list has been show below.</p>
      <Table className = "TableStyle" striped bordered condensed hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>

    {
     this.state.todo.map((d,key) =>
     <tr>

        <td>
          <p>{d.id}</p>
          </td>

          <td>
            <p>{d.title}</p>
            </td>

            <td>
              <p>{d.description}</p>
              </td>

              <td>
                <p>{d.date}</p>
                </td>

                <td>
                  <p>{d.status}</p>
                  </td>
                 </tr>
     )
   }

  </tbody>
</Table>
</div>
);
}

}

export default showAll;

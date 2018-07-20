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

class removeTodo extends Component {
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

    handleClick(id,event){
      fetch('http://203.170.129.84/dormitory/backend/backendapp/todoBackend/deleteTodo.php',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          // we will pass our input data to server
          id : id,
        })
      })
      .then((response) => response.json())
       .then((responseJson)=>{
         if(responseJson === 'Data Inserted Successfully into MySQL Database'){
           alert('Todo id' + '' + id + '' + 'has been remove! Please refresh after remove');
           event.preventDefault();
         }
         else{
           alert('Sorry! cannot remove');
            event.preventDefault();
         }
       })
       .catch((error)=>{
       console.error(error);
       });
  }


  render() {
    return (
      <div>
      <h1>Remove TODO List</h1>
      <p>You can remove some todo list as shown below at button "Remove"</p>
      <Table className = "TableStyle" striped bordered condensed hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Date</th>
      <th>Status</th>
      <th>Update</th>
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

                  <td>
                  <Button bsStyle="warning" onClick={this.handleClick.bind(this,d.id)}>Update</Button>
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

export default removeTodo;

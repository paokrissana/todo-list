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

class updateTodo extends Component {
  constructor(props) {
    super(props);
      this.state = {
        id: '',
        title : '',
        description : '',
        date : '',
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
  this.setState({[event.target.name] : event.target.value});
  }

  handleSubmit(event){
  //  const {username,password} = this.state;

    if(this.state.id === ""){
      alert('Please filled out your id');
    }
    else if(this.state.title === ""){
      alert('Please filled out your title');
    }
    else if(this.state.description === "")
    {
      alert('Please filled out your description');
    }
    else if(this.state.date === "")
    {
      alert('Please filled out your date');
    }
    else{
    fetch('http://203.170.129.84/dormitory/backend/backendapp/todoBackend/updateTodo.php',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        // we will pass our input data to server
        id : this.state.id,
        title : this.state.title,
        description : this.state.description,
        date : this.state.date
      })
    })
    .then((response) => response.json())
     .then((responseJson)=>{
       if(responseJson === 'Data Inserted Successfully into MySQL Database'){
         alert('Todo id' + '' + this.state.id + '' + 'Updated!');
         event.preventDefault();
       }
       else{
         alert('Sorry! cannot updated');
          event.preventDefault();
       }
     })
     .catch((error)=>{
     console.error(error);
     });
    }
  }

  render() {
    return (
      <div>
      <h1>Update TODO List</h1>
      <p>You can update your todo list by typing id that you want to update , title , description , date and click "Update"</p>
         <Form horizontal onSubmit = {this.handleSubmit}>

         <FormGroup>
         <Row>
           <Col xs={6} md={4}>
           <ControlLabel>
             ID :
           </ControlLabel>
           </Col>
           <Col xs={6} md={4}>
             <FormControl
                type="number"
                placeholder="Typing your id that wanted to update"
                value={this.state.id}
                name = "id"
                onChange={this.handleChange}
                />
           </Col>
           </Row>
         </FormGroup>

           <FormGroup>
           <Row>
             <Col xs={6} md={4}>
             <ControlLabel>
               Title :
             </ControlLabel>
             </Col>
             <Col xs={6} md={4}>
               <FormControl
                  type="text"
                  placeholder="Typing your title that wanted to update"
                  value={this.state.title}
                  name = "title"
                  onChange={this.handleChange}
                  />
             </Col>
             </Row>
           </FormGroup>

           <FormGroup>
           <Row>
             <Col xs={6} md={4}>
               <ControlLabel>
               Description :
               </ControlLabel>
             </Col>
             <Col xs={6} md={4}>
               <FormControl
               //type="password"
               placeholder="Typing your description that wanted to update"
               value={this.state.description}
               name = "description"
               onChange={this.handleChange}
               />
             </Col>
             </Row>
           </FormGroup>

           <FormGroup>
           <Row>
             <Col xs={6} md={4}>
               <ControlLabel>
               Date :
               </ControlLabel>
             </Col>
             <Col xs={6} md={4}>
               <FormControl
               placeholder="Typing your date that wanted to update"
               value={this.state.date}
               name = "date"
               onChange={this.handleChange}
               />
             </Col>
             </Row>
           </FormGroup>

           <FormGroup>
           <Row>
           <Col smOffset={2} sm={10}>
            <Button bsStyle="warning" style={{marginLeft:'10%'}} type = "submit">Update</Button>
            <Button bsStyle="danger" style={{marginLeft:'5%'}}><Link className = "textButton"  to="/">Cancel</Link></Button>
            </Col>
            </Row>
           </FormGroup>
         </Form>
         </div>
);
}

}

export default updateTodo;

import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

class AddStu extends React.Component{
    constrctor(props) {
        this.state={email:'', content:'', identification:''};
    }
    handleSubmit = () => {

    fetch('http://localhost:8080/students',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.identification,
        email: this.state.email,
        statusCode: 0,
        status: "Active"
      })
    })
    .then(response => response.json() )
    .then(responseData => {
      const { email } = responseData;
      this.setState({
        email: email, 
        content: (email == this.state.email ? 'Student has been added' : 'email already created, student has not added')
      });
    })
    .catch(err => console.error(err))

    }
    handleChange = (event) =>  {
    this.setState({[event.target.identification]: event.target.value});
     }
     render() {
        const {alias, identification, content } = this.state;
        return (
          <div>
            <h3>Enter fields below: </h3>
            <TextField autoFocus style = {{width:200}} 
                 label="Name" name="name" 
                 onChange={this.handleChange}  value={identification} /> 
            <br/> <br/>
            <TextField style = {{width:200}} label="Email" name="email" 
                 onChange={this.handleChange}  value={alias} />
    
            <br/> <br/>
    
            <Button variant="outlined" color="primary" style={{margin: 5}}
                 onClick={this.handleSubmit} >Add Student</Button>
    
            <Button variant="outlined" color="primary" style={{margin: 5}}
                 onClick={() => window.location.reload(false)}>Clear</Button>
    
            <h3>{content}</h3>
          </div>
          ); 
      }
    }
    export default AddStudent;

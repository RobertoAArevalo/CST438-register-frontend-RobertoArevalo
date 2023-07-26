import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class AddStu extends React.Component {
  constructor(props) {
    super(props);
    // Initialize component state
    this.state = { email: '', contents: '', name: '' };
  }

  // Function to handle form submission
  handleSubmit = () => {
    // Send a POST request to the server to add a new student
    fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Convert state data to JSON and send it in the request body
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        statusCode: 0,
        status: 'Active'
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the response from the server
        const { email } = responseData;
        // Update the state with the server's response
        this.setState({
          email: email,
          // Set contents based on whether the email was already created or not
          contents: email === this.state.email ? 'Student has been added' : 'Email already created, student has not been added'
        });
      })
      .catch((err) => console.error(err));
  };

  // Function to handle input field changes
  handleChange = (event) => {
    // Update the state with the new value from the input field
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, contents } = this.state;
    return (
      <div>
        <h2>Enter fields below:</h2>
        {/* Input field for the student's name */}
        <TextField
          autoFocus
          style={{ width: 300 }}
          label="Name"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <br />
        <br />
        {/* Input field for the student's email */}
        <TextField
          style={{ width: 300 }}
          label="Email"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <br />
        <br />
        {/* Button to add the student */}
        <Button id="addStuButton" variant="outlined" color="primary" style={{ margin: 5 }} onClick={this.handleSubmit}>
          Add Student
        </Button>
        {/* Button to clear the form */}
        <Button variant="outlined" color="primary" style={{ margin: 5 }} onClick={() => window.location.reload(false)}>
          Clear
        </Button>
        {/* Message to show the result of adding the student */}
        <h2>{contents}</h2>
      </div>
    );
  }
}

export default AddStu;

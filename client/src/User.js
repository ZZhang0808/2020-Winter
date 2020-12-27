import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      key: ''
    };
    // used "bind(this)" so that these methods can access "this.state"
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName = this.setLastName.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  setFirstName(e) {
    this.setState({firstName: e.target.value})
  }

  setLastName(e) {
    this.setState({lastName: e.target.value})
  }

  setEmail(e) {
    this.setState({email: e.target.value})
  }

  setPassword(e) {
    this.setState({password: e.target.value})
  }

  createUser() {
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.email
    };
    let config = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    console.log(config);
    fetch('http://localhost:8000/user/create', config)
    .then(response => response.json())
    .then(key => {this.setState({key: key})})
    .catch(error => console.log(error));
  }

  deleteUser() {
    let config = {
      method: 'DELETE'
    };
    fetch('http://localhost:8000/user/uTM4HSI84xTAx3tnNSFSEMtSwZ93', config);
  }

  render() {
    return <div>
      <form onSubmit={() => this.createUser}>
        <label>First Name 
          <input type='text' onChange={this.setFirstName} />
        </label>
        <label>Last Name 
          <input type='text' onChange={this.setLastName} />
        </label>
        <label>Email
          <input type='text' onChange={this.setEmail} />
        </label>
        <label>Password
          <input type='text' onChange={this.setPassword} />
        </label>
        <button onClick={this.createUser}>Submit</button>
      </form>
      <button onClick={this.deleteUser}>Delete</button>
    </div>
  }

}

export default User;

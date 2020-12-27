import React, { Component } from 'react';

class Poll extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      email: '',
      password: '',
      key: ''
    };
    this.setName = this.setName.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  setName(e) {
    this.setState({name: e.target.value})
  }

  setDescription(e) {
    this.setState({description: e.target.value})
  }

  setEmail(e) {
    this.setState({email: e.target.value})
  }

  setPassword(e) {
    this.setState({password: e.target.value})
  }

  createUser() {
    let data = {
      name: this.state.name,
      description: this.state.description,
      email: this.state.email,
      password: this.state.email
    };
    let config = {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    console.log(config);
    fetch('http://localhost:8000/poll/create', config)
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
        <label>Name
          <input type='text' onChange={this.setName} />
        </label>
        <label>Description
          <input type='text' onChange={this.setDescription} />
        </label>
        <label>Option 1
          <input type='text' onChange={this.setEmail} />
        </label>
        <label>Option 2
          <input type='text' onChange={this.setPassword} />
        </label>
        <button onClick={this.createUser}>Submit</button>
      </form>
      <button onClick={this.deleteUser}>Delete</button>
    </div>
  }

}

export default Poll;

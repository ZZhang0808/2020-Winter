import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class PollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            email: '',
            password: '',
            key: '',
            polls: []
        };
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.createPoll = this.createPoll.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:8000/poll/list', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                response.json().then(dataSnapshot => {
                    var list = []
                    var data = [];
                    if (dataSnapshot != null) {
                        data = Object.values(dataSnapshot);
                    }
                    data.forEach(childSnapshot => {
                        console.log(childSnapshot)
                        list.push(childSnapshot);
                    });
                    this.setState({polls: list});
                })
            });

    }

    setName(e) {
        this.setState({ name: e.target.value })
    }

    setDescription(e) {
        this.setState({ description: e.target.value })
    }

    setEmail(e) {
        this.setState({ email: e.target.value })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    createPoll() {
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
            .then(key => { this.setState({ key: key }) })
            .catch(error => console.log(error));
    }

    deletePoll(key) {
        let config = {
            method: 'DELETE'
        };
        fetch('http://localhost:8000/poll/delete/' + key, config);
        window.location.reload();
    }

    render() {
        let list = this.state.polls.map(item =>
            <tr>
                <td onClick={() => this.props.history.push('/poll/' + item.key)}>{item.name}</td>
                <td><button onClick={this.deletePoll.bind(this, item.key)}>Delete</button></td>
            </tr>);
        return <div>
            <form onSubmit={() => this.createPoll}>
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
                <button onClick={this.createPoll}>Submit</button>
            </form>
            <table>
                {list}
            </table>
        </div>
    }

}

export default withRouter(PollList);

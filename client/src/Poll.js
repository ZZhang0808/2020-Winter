import React, { Component } from 'react';


class PollList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: this.props.match.params.key,
            name: '',
            description: '',
            options: ''
        };
        this.setName = this.setName.bind(this);
        this.setDescription = this.setDescription.bind(this);
        this.setOptions = this.setOptions.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:8000/poll/read/' + this.state.key, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
            .then(response => {
                response.json().then(dataSnapshot => {
                    this.setState({name: dataSnapshot.name, description: dataSnapshot.description, options: dataSnapshot.options});
                })
            });

    }

    setName(e) {
        this.setState({ name: e.target.value })
    }

    setDescription(e) {
        this.setState({ description: e.target.value })
    }

    setOptions(data) {
        this.setState({ options: data })
    }

    setPassword(e) {
        this.setState({ password: e.target.value })
    }

    createPoll() {
        let data = {
            name: this.state.name,
            description: this.state.description,
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
        return <div>
            <h3>{this.state.name}</h3>
            <h5>{this.state.description}</h5>
        </div>
    }

}

export default PollList;

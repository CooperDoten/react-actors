import React, { Component } from 'react';

class AddUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        bestImpression: '',
    }
    onFirstName = (event) => {
        console.log(event.target.value);
        this.setState({
           firstName: event.target.value
        }); 
    }
    onLastName = (event) => {
        console.log(event.target.value);
        this.setState({
           lastName: event.target.value
        }); 
    }

    onImpression = (event) => {
        console.log(event.target.value);
        this.setState({
           bestImpression: event.target.value
        });
    }

    onClick = () => {
        alert(`Thank you for joining us, 
        ${this.state.firstName} ${this.state.lastName}`);
        this.setState({
            firstName: '',
            lastName: '',
            bestImpression: ''
         });
    }
    render() {
        let userSees;
        if(this.state.bestImpression === ''){
            userSees = ''
        }
        else {
            userSees = `${this.state.firstName} ${this.state.lastName} 's best impression is ${this.state.bestImpression}`
        }

      return (
        <div>
            <input type="text" placeholder="First Name"   value = {this.state.firstName} onChange={this.onFirstName} />
            <input type="text" placeholder="Last Name"  value = {this.state.lastName} onChange={this.onLastName} />
            <input type="text" placeholder="Best Impression"  value = {this.state.bestImpression} onChange={this.onImpression} />
            <button onClick={this.onClick}>Join Us!</button>
            <p>{userSees}</p>
        </div>
      );
    }
  }
  export default AddUser;
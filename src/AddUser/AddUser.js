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
    render() {
      return (
        <div>
          <input type="text" placeholder="First Name"  onChange={this.onFirstName} />
          <input type="text" placeholder="Last Name" onChange={this.onLastName} />
          <input type="text" placeholder="Best Impression" onChange={this.onImpression} />
      <p>{this.state.firstName} {this.state.lastName} {this.state.bestImpression}</p>
        </div>
      );
    }
  }
  
  export default AddUser;
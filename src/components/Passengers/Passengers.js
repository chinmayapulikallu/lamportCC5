import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
    state ={
      name: ''
    }

  handleChange = (event, propertyName) => {
    console.log('in handleChange', event.target.value, this.state.name);
    this.setState({
      name: event.target.value
    })
  }

  handleClick = (event) => {
    console.log('in handleClick');
    this.props.dispatch({type: 'ADD_PASSENGER', payload: this.state.name});
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.reduxState)}
        <h2>Passengers</h2>
        <input onChange={this.handleChange} type="text" name="name" value={this.state.name} placeholder="Enter Name" />
        <button onClick={this.handleClick}>Add Passenger</button>

     <ul>PASSENGER LIST: {this.props.reduxState.passengerReducer.map((passenger, index) =>
      <li key={index}>{passenger.name}</li>
      )}
      </ul> 
      
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState })
export default connect(putReduxStateOnProps)(Passengers);
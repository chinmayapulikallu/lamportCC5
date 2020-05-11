import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {

  increaseSpeed = () => {
    console.log('in increaseSpeed');
    this.props.dispatch({type: 'SPEED_INCREASE', payload: 1})
  }

  decreaseSpeed = () => {
    console.log('in decreaseSpeed');
    this.props.dispatch({ type: 'SPEED_DECREASE', payload: 1})
  }


  render() {
    return (
      <div>
        <h2>Speed Control</h2>
        <button onClick={this.increaseSpeed}>Increase Speed</button>
        <p>SPEED:{this.props.reduxState.speedReducer.count} </p>
        <button onClick={this.decreaseSpeed}>Decrease Speed</button>
      </div>
    )
  }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(SpeedControl);
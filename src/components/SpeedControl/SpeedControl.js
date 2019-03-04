import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  moreScotty = (event) => {
    this.props.dispatch({ type: "MORE_POWER" })
  }
  lessScotty = (event) => {
    this.props.dispatch({ type: "LESS_POWER" })
  }

  render() {
    console.log()
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.moreScotty}>Increase Speed</button>
        <p>{this.props.reduxStore.speedReducer}</p>
        <button onClick={this.lessScotty}>Decrease Speed</button>
      </div>
    )
  }
}
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(SpeedControl);
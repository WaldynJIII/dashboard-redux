import React, { Component } from 'react';
import { connect } from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state={
passenger: '',
  }
  onHandleChange=(event)=>{
this.setState({
  ...this.state,
  passenger: event.target.value
})
  }
setManifest=(event)=>{
this.props.dispatch({type: "ADD_PASSENGER", payload: this.state.passenger})
this.setState({
  ...this.state,
  passenger: '',
})
}
  
  render() {
    console.log(this.state.passenger)
    return (
      <div>
        <h2>Passengers</h2>

        <input onChange={this.onHandleChange} type="text" name="name" placeholder="Enter Name" />
        <button onClick={this.setManifest}>Add Passenger</button>

        <ul>{this.props.reduxStore.passengerReducer.map(passenger=>(
          <li>{passenger}</li>
        ))}</ul>
      
      </div>
    )
  }
}
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Passengers);
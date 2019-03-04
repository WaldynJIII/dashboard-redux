import React, { Component } from 'react';

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
  render() {
    return (
      <div>
        <h2>Passengers</h2>

        <input onChange={this.onHandleChange} type="text" name="name" placeholder="Enter Name" />
        <button on>Add Passenger</button>

        <ul>PASSENGER LIST: GOES HERE</ul>
      
      </div>
    )
  }
}

export default Passengers;
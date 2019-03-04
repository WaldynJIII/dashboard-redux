import React, { Component } from 'react';
import { connect } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>Current Speed: {this.props.reduxStore.speedReducer}</p>
        <p>Passengers: {this.props.reduxStore.passengerReducer.length}</p>
      </div>
    )
  }
}
const mapReduxStoreToProps = (reduxStore) => ({
  reduxStore: reduxStore
})
export default connect(mapReduxStoreToProps)(Dashboard);
import React, { Component } from 'react'
import { connect } from 'react-redux'

class TotalPrice extends Component {
  render() {
    return (
      <div>
        {this.props.passengerNumber * this.props.ticketPrice}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        passengerNumber : state.passengerNumber,
        travelClass : state.travelClass,
        ticketPrice : state.ticketPrice
    }
}

export default connect(mapStateToProps)(TotalPrice)
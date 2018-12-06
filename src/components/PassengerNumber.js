import React, { Component } from 'react'
import { connect } from 'react-redux'

class PassengerNumber extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passengerNumber : 0
        }
    }


    decrementNumber = () => {
        if( this.props.passengerNumber > 0 ) {
                this.props.onDecrementNumber(this.state.passengerNumber)
            }
        }

    incrementNumber = () => {
        this.props.onIncrementNumber(this.state.passengerNumber)
    }

  render() {
    return (
      <div className="stepper">
        <button onClick={this.decrementNumber}>-</button>
        <div>{this.props.passengerNumber}</div>
        <button onClick={this.incrementNumber}>+</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
    return {
        passengerNumber : state.passengerNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementNumber: () => dispatch({type: "INC_PASSENGER"}),
        onDecrementNumber: () => dispatch({type: "DEC_PASSENGER"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerNumber)
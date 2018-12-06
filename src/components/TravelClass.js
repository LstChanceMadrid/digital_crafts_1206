import React, { Component } from 'react'
import { connect } from 'react-redux'

class TravelClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ticketPrice : 100,
            travelClass : "Economy Class"
        }
    }

    changeTravelClass = (e) => {
        if (e.target.value === 'Economy Class') {
            this.props.onEconomyClass(e.target.value)
        }
        if (e.target.value === 'Premium Economy') {
            this.props.onPremiumEconomy(e.target.value)
        }
        if (e.target.value === 'Business Class') {
            this.props.onBusinessClass(e.target.value)
        }
        if (e.target.value === 'First Class') {
            this.props.onFirstClass(e.target.value)
        }
    }

    

  render() {
      console.log(this.state.travelClass)
    return (
      <div>
        

        <select onChange={this.changeTravelClass}>
            <option value="Economy Class">Economy Class</option>
            <option value="Premium Economy">Premium Economy</option>
            <option value="Business Class">Business Class</option>
            <option value="First Class">First Class</option>
        </select><br />
        <label>Class-</label>
        {this.props.travelClass},<br />
        <label>Ticket Price-</label>
        ${this.props.ticketPrice}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        ticketPrice : state.ticketPrice,
        travelClass : state.travelClass
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEconomyClass : () => dispatch({type: "ECONOMY_CLASS"}),
        onPremiumEconomy : () => dispatch({type: "PREMIUM_ECONOMY"}),
        onBusinessClass : () => dispatch({type: "BUSINESS_CLASS"}),
        onFirstClass : () => dispatch({type: "FIRST_CLASS"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelClass)
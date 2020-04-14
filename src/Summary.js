import React, { Component } from 'react';
import Summary_Total from './Summary_Total';
import Summary_Option from './Summary_Option';

class Summary extends Component {
    render() {
        console.log("Made it inside Summary")
        return (
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary_Option selected={this.props.selected} USCurrencyFormat={this.props.USCurrencyFormat}/>
          <Summary_Total selected={this.props.selected} USCurrencyFormat={this.props.USCurrencyFormat}/>
          </section>
        )
      }
}

export default Summary;
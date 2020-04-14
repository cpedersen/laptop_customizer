import React, { Component } from 'react';
import SummaryTotal from './SummaryTotal';
import SummaryOption from './SummaryOption';

class Summary extends Component {
    render() {
        console.log("Made it inside Summary")
        return (
          <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption selected={this.props.selected} USCurrencyFormat={this.props.USCurrencyFormat}/>
          <SummaryTotal selected={this.props.selected} USCurrencyFormat={this.props.USCurrencyFormat}/>
          </section>
        )
      }
}

export default Summary;
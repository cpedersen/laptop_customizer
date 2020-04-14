import React, { Component } from 'react';

class Summary_Total extends Component {
    render() {
        console.log("Made it inside Summary_Total")
        
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        return (
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
              </div>
            </div>
        );
    }
}

export default Summary_Total;
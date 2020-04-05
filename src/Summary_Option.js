import React, { Component } from 'react';

class Summary_Option extends Component {
    render() {
        console.log("Made it inside Summary_Option")

        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            console.log("Feature: " + feature + " Index: " + idx);
            const featureHash = feature + '-' + idx;
            //console.log("featureHash: " + featureHash);
            const selectedOption = this.props.selected[feature];
            //console.log("selectedOption.cost: " + selectedOption.cost);
        })

        console.log("summary: " + summary);
        //console.log("featureHash: " + featureHash);

        /*
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {this.props.USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        );*/

        return (
            <div></div>
        );
    }
}

export default Summary_Option;
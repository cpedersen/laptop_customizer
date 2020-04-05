import React, { Component } from 'react';
import Heading from './Heading';
import Summary from './Summary';
import Summary_Total from './Summary_Total';
import Summary_Option from './Summary_Option';
import Feature from './Feature';
import Feature_Item from './Feature_Item';
import Feature_Option from './Feature_Option';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    console.log("Made it inside App");
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    console.log("Feature_Item");

    const features = Object.keys(this.props.features).map((feature, idx) => {
      console.log("Feature: " + feature + " Index: " + idx);
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      console.log("Feature")
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    //Move lines 97 to 101 to Summary component
    console.log("Summary_Total")
    return (
      <div className="App">
        <Heading/>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary selected={this.state.selected} USCurrencyFormat={USCurrencyFormat}/>
          <Summary_Total selected={this.state.selected} USCurrencyFormat={USCurrencyFormat}/>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

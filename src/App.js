import React from 'react';
import Heading from './Heading';
import Summary from './Summary';
import Feature from './Feature';
import Features from './FeatureData';
import './App.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends React.Component {
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
    },
    Features: Features
  };
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Heading/>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Feature 
              features={this.state.Features} 
              selected={this.state.selected} 
              updateFeature={this.updateFeature}
              USCurrencyFormat={USCurrencyFormat}/>
          </form>
          <Summary selected={this.state.selected} USCurrencyFormat={USCurrencyFormat}/>
        </main>
      </div>
    );
  }
}

export default App;



import React, { Component } from 'react';
import Heading from './Heading';
import Summary from './Summary';
import Feature from './Feature';
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
    }
  };
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = {
      Processor: [
        {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        {
          name: 'Professor X AMD Fire Breather with sidewinder technology',
          cost: 1200
        }
      ],
      "Operating System": [
        {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        {
          name: 'Bodhi Linux',
          cost: 300
        }
      ],
      "Video Card": [
        {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        {
          name: 'Mind mild breeze 2000',
          cost: 1345
        }
      ],
      Display: [
        {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        },
        {
          name: '15.3" HGTV (3840 x 2160) Home makeover edition',
          cost: 1400
        },
      ]
    };
    return (
      <div className="App">
        <Heading/>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Feature 
              features={features} 
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



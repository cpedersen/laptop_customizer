import React, { Component } from 'react';
import FeatureItem from './FeatureItem';

class Feature extends Component {
    render() {
        return (
            <div>{
                Object.keys(this.props.features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    return (
                        <fieldset className="feature" key={featureHash}>
                            <FeatureItem 
                                feature={feature} 
                                features={this.props.features} 
                                selected={this.props.selected} 
                                updateFeature={this.props.updateFeature}
                                USCurrencyFormat={this.props.USCurrencyFormat} />
                        </fieldset>
                    );
                })
            }</div>
        );
    }
}

export default Feature;
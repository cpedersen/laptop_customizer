import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';
import FeatureOption from './FeatureOption';

class Feature extends Component {
    render() {
        return (
            <div>{
                Object.keys(this.props.features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    return (
                        <fieldset className="feature" key={featureHash}>
                            <FeatureItem feature={feature}/>

                            {this.props.features[feature].map(item => {
                                const itemHash = slugify(JSON.stringify(item));
                                return (
                                    <FeatureOption 
                                        key={itemHash}
                                        itemHash={itemHash} 
                                        feature={feature} 
                                        selected={this.props.selected}
                                        item={item}
                                        updateFeature={this.props.updateFeature}
                                        USCurrencyFormat={this.props.USCurrencyFormat}
                                    />
                                );
                            })}

                        </fieldset>
                    );
                })
              }</div>
        );
    }
}

export default Feature;


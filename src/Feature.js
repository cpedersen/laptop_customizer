import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureItem from './FeatureItem';
import FeatureOption from './FeatureOption';

class Feature extends Component {

    render() {
        /*const features = Object.keys(this.props.features).map((feature, idx) => {
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
                    checked={item.name === this.props.selected[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          }); */

        return (
            <div>{
                Object.keys(this.props.features).map((feature, idx) => {
                    const featureHash = feature + '-' + idx;
                    return (
                        <fieldset className="feature" key={featureHash}>
                            <Feature_Item feature={feature}/>

                            {this.props.features[feature].map(item => {
                                const itemHash = slugify(JSON.stringify(item));
                                return (
                                    <Feature_Option 
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


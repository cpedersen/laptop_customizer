import React, { Component } from 'react';
import slugify from 'slugify';
import FeatureOption from './FeatureOption';

class FeatureItem extends Component {
    render() {
        return (
            <>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {this.props.features[this.props.feature].map(item => {
                    const itemHash = slugify(JSON.stringify(item));
                    return (
                        <FeatureOption
                            key={itemHash}
                            itemHash={itemHash}
                            feature={this.props.feature}
                            selected={this.props.selected}
                            item={item}
                            updateFeature={this.props.updateFeature}
                            USCurrencyFormat={this.props.USCurrencyFormat}
                        />
                    );
                })}
            </>
        )
    }
}

/*class FeatureItem extends Component {
    render() {
        return (
            <legend className="feature__name">
                <h3>{this.props.feature}</h3>
            </legend>
        )
    }
}*/

export default FeatureItem;


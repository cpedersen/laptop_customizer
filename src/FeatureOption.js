import React, { Component } from 'react';
import slugify from 'slugify';

class FeatureOption extends Component {
    render() {
        console.log("Made it inside Feature_Option")
        return (
            <div key={this.props.itemHash} className="feature__item">
            <input
                type="radio"
                id={this.props.itemHash}
                className="feature__option"
                name={slugify(this.props.feature)}
                checked={this.props.item.name === this.props.selected[this.props.feature].name}
                onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
            />
            <label htmlFor={this.props.itemHash} className="feature__label">
                {this.props.item.name} ({this.props.USCurrencyFormat.format(this.props.item.cost)})
            </label>
        </div>
        )
    }
}

export default FeatureOption;



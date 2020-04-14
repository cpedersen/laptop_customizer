import React, { Component } from 'react';

class Feature_Item extends Component {

    render() {
        console.log("Made it inside Feature_Item")
        return (
            <legend className="feature__name">
                <h3>{this.props.feature}</h3>
          </legend>



        )
    }

}

export default Feature_Item;
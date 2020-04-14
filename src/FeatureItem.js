import React, { Component } from 'react';

function FeatureItem(props) {
    console.log("Made it inside Feature_Item")
    return (
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
    )
}

export default FeatureItem;
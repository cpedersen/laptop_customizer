import React from 'react';

function FeatureItem(props) {
    return (
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
    )
}

export default FeatureItem;
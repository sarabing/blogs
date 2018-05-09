import PropTypes from 'prop-types';
import React from 'react';
//无状态组件用context
const Box = ({children},context) =>{
    return (
        <div>
            <p>{children}</p>
            <h1>{context.color}</h1>
        </div>
    )
    
}

Box.contextTypes={color:PropTypes.string}

module.exports = {
    Box
}
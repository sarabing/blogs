import React from 'react';
import PropTypes from 'prop-types';

const Input = ({label,name,value,children,...props},{defaultTheme}) =>{
    
    const {theme,autoFocus,...rootProps} = props;

    return (
        <div
            htmlFor={name}
            children={label || ''}
            {...rootProps}>
            <input 
                name={name}
                type="text"
                defaultValue={value || ''}
                theme={theme || defaultTheme}
                {...props}
            />
        </div>
    )
}

Input.propTypes = {
    name:PropTypes.string,
    label:PropTypes.string,
    value:PropTypes.string
}

Input.defaultProps = {
    name:'Stranger'
}

Input.contextTypes={defaultTheme:(s) =>{console.log(s);}}

export default Input;
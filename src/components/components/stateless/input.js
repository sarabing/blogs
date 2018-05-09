import React from 'react';
const Input = ({label,name,value,...props},{defaultTheme}) =>{
    const {theme,autoFocus,...rootProps} = props;

    return (
        <label
            htmlFor={name}
            children={label || defaultLabel}
            {...rootProps}>
            <input 
                name={name}
                type="text"
                value={value || ''}
                theme={theme || defaultTheme}
                {...props}
            />
        </label>
    )
}

Input.contextType = {defaultTheme:React.PropTypes.object};
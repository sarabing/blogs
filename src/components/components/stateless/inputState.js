import React from 'react';
import PropTypes from 'prop-types';

class InputState extends React.Component{
    constructor(props,context){
        super(props);
        console.log(context);
    }
    render(){
        return (
            <div>
                input 有状态并且使用context的情况

            </div>
        )
    }
} 

InputState.contextTypes={
    defaultTheme:PropTypes.string
}

export default InputState;
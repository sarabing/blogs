import React from 'react';
import Input from './input';
import InputState from './inputState';
import PropTypes from 'prop-types';
import {withViewport} from './withView';
export class StateLess extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            defaultTheme:'*******'
        }
      }
    static defaultProps = {
        name: 'stranger'
    }
    getChildContext() {
        return {defaultTheme: this.state.defaultTheme};
    }
    render(){
        let SizeableInput = withViewport(Input);
        return (
            <div>
                无状态组件
                <Input  label={'name'}  value={'无状态组件的value'}>我就是试试看能不能拿到</Input>
                高阶组件
                <SizeableInput label={'name'}  value={'高阶组件 ---- 无状态组件的value'}>高阶组件测试child能不能拿到</SizeableInput>
                {/* 有状态组件 测试context */}
                {/* <InputState /> */}
            </div>
        )
    }
}

StateLess.propTypes = {
    name:PropTypes.string
}

StateLess.childContextTypes = {
    defaultTheme: PropTypes.string
};
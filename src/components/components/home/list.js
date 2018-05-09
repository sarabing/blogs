import React from 'react';
import {Item} from './item';
import {Box} from './noStatus';
class List extends React.Component{
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <div>
                <Item />
                <Box  name={'key'}>测试一下无状态组件的样子</Box>
            </div>
        )
    }
}

module.exports = {
    List
}
import React from 'react';
import PropTypes from 'prop-types';
import {List} from './list';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            color:'black'
        }
      }
      getChildContext() {
        return {color: this.state.color};
      }
    render(){
        // let list = [
        //     'one',
        //     'two',
        //     'three',
        //     'four'
        // ]
        let color='red'
        return (
            <div>
                home
                <List />
            </div>
        )
    }
}

Home.childContextTypes = {
    color: PropTypes.string
  };

module.exports = {
    Home
}
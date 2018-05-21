// const ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
// console.log(ExecutionEnvironment);
import React from 'react';
let viewport = {
    width:1366,
    height:768
}

function handleWindowResize(){
    if(viewport.width !== window.innerWidth || viewport.height !== window.innerHeight){
        viewport = {
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
}

function withViewport(ComposedComponent){
    return class Viewport extends React.Component{
        state = {
            viewport:{ width: window.innerWidth, height: window.innerHeight }
        }
        componentDidMount() {
            // Server 端渲染是不会执行到 `componentDidMount` 的，只会执行到 `componentWillMount`
            window.addEventListener('resize', handleWindowResize)
            window.addEventListener('orientationchange', handleWindowResize)
        }
        render() {
            return <ComposedComponent {...this.props} viewport={this.state.viewport}/>
          }
    }
}

module.exports ={
    withViewport
}
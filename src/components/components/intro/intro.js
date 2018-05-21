import React from 'react';
import {ThemeContext, themes} from './context';
import {IntroItem} from './item';
import {Btn} from './btn';
import {Map} from 'immutable';
class Intro extends React.Component{
    constructor(props) {
        super(props);  
        this.toggleTheme = () => {
            this.setState((prevState,props) =>{
                //es7语法 let a={a:1,b:2};let b = {...a,name:'sara'}; => b={a:1,b:2,name:'sara'}
                // let count = {
                //     ...prevState.count,
                //     counter:++prevState.count.counter
                // }
                return prevState.set('counter',++prevState.count.counter)
                // return {
                //     count:count
                // }
            })
            
        }
        this.state ={
            count:{
                counter:0,
                toggleTheme:this.toggleTheme
            }
            
        }
      }
    
    render(){
        return (
            <div>
                <ThemeContext.Provider value={this.state.count}>
                    <IntroItem  />
                </ThemeContext.Provider>
                <Btn />
            </div>
        )
    }
}

module.exports = {
    Intro
}
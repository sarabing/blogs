import React from 'react';

import { Provider } from './context';

class Counter extends React.Component{
    constructor(props){
        this.state = {
            counter:{
                value:0,
                inc:this.inc,
                dec:this.dec
            }
        }
    }
    inc =()=>{
        this.setState(({counter}) =>({
            counter:{
                ...counter,
                value:counter.value+1
            }
        }))
    }
    dec =() =>{
        this.setState(({counter}) =>({
            counter:{
                ...counter,
                value:counter.value-1
            }
        }))
    }
    render(){
        return(
            <Provider value={this.state.counter}>
                <CounterCard />
            </Provider>
        )
    }
}

export default Counter;
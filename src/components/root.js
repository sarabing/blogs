import React from 'react';
import 'whatwg-fetch'
export class Root extends React.Component{
    constructor(props) {
        super(props);
      }
    getApi(){
        fetch('/myaccount/invest/ajax/invest_info').then((data) =>{
            console.log(data);
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.getApi.bind(this)}>点击api</button>
                第一个react搭建
            </div>
        )
    }
}

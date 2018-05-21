import React from 'react';
import ReactDOM from 'react-dom';
/**
 * react中将store向组件传递
 */
import { Provider } from 'react-redux'; 
/**
 * createStore 创建store， 
 * applyMiddleware中间件用于action到reducer之间做的操作
 */
import {createStore, applyMiddleware} from 'redux';
/**
 * 正常dispatch接收的action是object 不能接收function  
 * 但当异步的时候需要这个中间件，实现原理如果是object直接执行reducer，如果是function执行function
 */
import thunk from 'redux-thunk'; 
/**
 * react-router 4 中BrowserRouter调用H5 histroy.. 将路由也当做组件
 */
import {BrowserRouter,Route,HashRouter }from 'react-router-dom'; 
/**
 * 将reducer整合成一个大的reducer 用combineReducers （redux）整合
 */
import {rootReducer} from './reducer/index'; 
import {Nav} from './components/components/nav/nav';
/**
 * 创建stroe
 */
const store = createStore(rootReducer,applyMiddleware(thunk)); 
/* 将store向下传递 */
ReactDOM.render(
    
        <Provider store={store}> 
            <HashRouter>
                <Nav/>
            </HashRouter>
        </Provider>
    
         
,document.getElementById('app'));
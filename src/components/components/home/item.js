import React from 'react';
import PropTypes from 'prop-types'; //使用context需要引用的包
class Item extends React.Component{
    constructor(props,context) {
        super(props);
      }
    render(){
        // let {color} = this.props;
        return (
            <div>
                <p>{this.context.color}</p>
            </div>
        )
    }
}

/**
 * 使用Context对象 需要在需要用到根组件数据的地方定义contextTypes
 * 在根组件定义
 * 详见home组件
 * Home.childContextTypes = {
    color: PropTypes.string
  };
  方法返回需要用的属性
  getChildContext() {
        return {color: this.state.color};
      }
      一旦组件定义了contextTypes以后，以下的勾子中就会得到一个附加的参数——context对象：
      即item组件有这些钩子 但home 组件是没有的
        constructor(props, context)
        componentWillReceiveProps(nextProps, nextContext)
        shouldComponentUpdate(nextProps, nextState, nextContext)
        componentWillUpdate(nextProps, nextState, nextContext)
        componentDidUpdate(prevProps, prevState, prevContext)
 * */
Item.contextTypes = {
    color: PropTypes.string
};

module.exports = {
    Item
}
import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route,Redirect,Link,withRouter} from 'react-router-dom' ;
import {Home} from '../home/home';
import {Intro} from '../intro/intro';
import {AboutUs} from '../aboutus/aboutus';
import {StateLess} from '../stateless/index';
import {addCount,setCount} from '../../../reducer/count/action';
class Main extends React.Component{
    constructor(props) {
        super(props);
      }
    add(){ 
        this.props.dispatch(addCount(2));
        this.props.dispatch(setCount());
    }
    render(){
        return (
            <div>
                {this.props.data.countData}
                <input type="button" value='click' onClick={this.add.bind(this)}/>
                <ul>
                    <li><Link to='/home'>首页</Link></li>
                    <li><Link to='/intro'>简介</Link></li>
                    <li><Link to='/aboutus'>联系我们</Link></li>
                    <li><Link to='/stateless'>无状态组件</Link></li>
                </ul>
                <Switch>
                    <Route path="/home" exact component={Home} />  
                    <Route path="/intro" component={Intro} />
                    <Route path="/aboutus" component={AboutUs} /> 
                    <Route path="/stateless" component={StateLess} /> 
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      data: state
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }

  /**
   * 当router外层使用Provider || store 需要使用withRouter 触发路由改版 
   * 否则将会在store更改后才能触发路由改变
   * */
export const Nav = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main))
// module.exports = {
//     Nav:Main
// }
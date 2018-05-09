## 说明 

===============================


##### 新建context.js 为上下文文件  类似于全局的store 

> React.createContext 为创建上下文，其中包括{Provider,Consumer}两个属性

> Provider是最外层使用数据或改变数据的地方

> Consumer是孙子组件使用数据的地方



> context.js

``` 
export const ThemeContext = React.createContext({
      theme:themes.dark, //默认值 挂载属性  经测试 需要在此处挂载默认  若不设置  报错
      toggleTheme:() =>{ //设置默认方法  
          console.log(1);
      }
  });

````

> parent.js

```
import {ThemeContext} from './context'; //将定义的context引入

/**
* 祖级组件需要使用context的Provider 传入value （这个是子孙级组件使用的属性 和默认的theme等属性对应）
* value值必传 （经测试），可没有Provider，Consumer会取context得默认值
**/
<ThemeContext.Provider value={this.state}>
    <IntroItem  /> //中间级组件
</ThemeContext.Provider>

```

> grandson.js

```
    import {ThemeContext} from './context';
    <ThemeContext.Consumer>
        //  Consumer放入函数  参数为context的传入属性 返回组件
        {({theme,toggleTheme}) => <button {...props} style={{backgroundColor:theme.background}} onClick={toggleTheme}/>}
    </ThemeContext.Consumer>

```


***

只要Provider改变  所有的Consumers都会重新渲染

一个组件可以使用多个上下文

####  context使用生命周期 

```
    class Button extends React.Component {
    componentDidMount() {
        // ThemeContext value is this.props.theme
    }

    componentDidUpdate(prevProps, prevState) {
        // Previous ThemeContext value is prevProps.theme
        // New ThemeContext value is this.props.theme
    }

    render() {
        const {theme, children} = this.props;
        return (
        <button className={theme ? 'dark' : 'light'}>
            {children}
        </button>
        );
    }
    }

    export default props => (
    <ThemeContext.Consumer>
        {theme => <Button {...props} theme={theme} />}
    </ThemeContext.Consumer>
    );

```


#### 如果多个组件想公用一个context  但不想写多遍相同的组件，可用高阶组件

```
    const ThemeContext = React.createContext('light');

    // This function takes a component...
    export function withTheme(Component) {
    // ...and returns another component...
    return function ThemedComponent(props) {
        // ... and renders the wrapped component with the context theme!
        // Notice that we pass through any additional props as well
        return (
        <ThemeContext.Consumer>
            {theme => <Component {...props} theme={theme} />}
        </ThemeContext.Consumer>
        );
    };
    }

    function Button({theme, ...rest}) {
    return <button className={theme} {...rest} />;
    }

    const ThemedButton = withTheme(Button);

```


#### 获取元素 refs

```
    fancy-button.js
    class FancyButton extends React.Component {
    focus() {
        // ...
        ref.current.focus();
    }

    // ...
    }

    // Use context to pass the current "theme" to FancyButton.
    // Use forwardRef to pass refs to FancyButton as well.
    export default React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
        {theme => (
        <FancyButton {...props} theme={theme} ref={ref} />
        )}
    </ThemeContext.Consumer>
    ));



    app.js

    import FancyButton from './fancy-button';

    const ref = React.createRef();

    // Our ref will point to the FancyButton component,
    // And not the ThemeContext.Consumer that wraps it.
    // This means we can call FancyButton methods like ref.current.focus()
    <FancyButton ref={ref} onClick={handleClick}>
    Click me!
    </FancyButton>;

```



# setState使用方法
```
    this.setState((prevState,props) =>{
        //es7语法 let a={a:1,b:2};let b = {...a,name:'sara'}; => b={a:1,b:2,name:'sara'}
        //需要用stage-2
        let count = {
            ...prevState.count,
            counter:++prevState.count.counter
        }
        return {
            count:count
        }
    })

```
> setState 可接收函数 prevState（是最新的state）,props（组件的props） 返回修改的新的object为state

this.setState({quantity: 2})
this.setState(Object.assign(
    {},
    {quantity: this.state.quantity + 1}
))










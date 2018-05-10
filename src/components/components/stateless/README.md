# 无状态组件


#第二种用context传递数据方法(建议不要用这种方式，具体因为啥不知道，可以用新版的react.createContext)

> 祖级组件需要设置getChildContext方法为孙级组件改变属性

```
getChildContext() {
    return {defaultTheme: this.state.defaultTheme};
}

```

> 祖级组件需要在组件级挂载childContextTypes方法，obj下的属性名是孙级组件的属性，后面的值是一个函数 
> 可用prop-types组件直接限制属性类型

```
StateLess.childContextTypes = {
    defaultTheme: (name) =>{console.log(name)}
};

import PropTypes from 'prop-types';

StateLess.childContextTypes = {
    defaultTheme: PropTypes.string
};

```

> 孙子级组件使用方法 
> 孙级组件需要在组件级挂载contextTypes方法，obj下的属性名是孙级组件的属性，后面的值是一个函数 
> 可用prop-types组件直接限制属性类型
```
Input.contextTypes={
    defaultTheme:(s) =>{console.log(s);}
}

Input.contextTypes = {
    defaultTheme: PropTypes.string
};

```

> 如果孙级组件是无状态组件 使用context用函数传递的第二个参数

```
// 第一个参数是父级传递的props 第二个参数是context 
const Input = (props,context) =>{
    const {children} = props
    return (
        <div>
            <p>{children}</p>
            <h1>{context.color}</h1>
        </div>
    )
    
}

```

> 如果孙级组件有状态

```
constructor(props,context){
    super(props);
    console.log(context);
}

```


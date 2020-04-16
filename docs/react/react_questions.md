---
title: React基础
---

## React的核心

React的核心：基础语法、属性、状态、生命周期、组件等

## ReactDOM的作用

ReactDOM 作用就是把虚拟DOM渲染成真实的DOM


## JSX语法
JSX语法：
```js
class App extends Component{
    render(){
        return(
            <ul className="list”>
                <li>Hello React</li>
            </ul>
        )
    }
}
```

## ReactCreatElement语法
ReactCreatElement语法:
```js
class App extends Component{
    render(){
       var child1 = React.createElement(‘li’,null,’Hello React’)
       var root = React.createElement(‘ul’,{className:’list’},child1)
    }
}
```

1. 基于babel-preset-react-app 把JSX变为React.createElement
2. 执行React.createElement( )创建JSX虚拟DOM对象

```js
{
    type:标签名组件
    props:{
        className:’xxx’ 我们传递的属性
        children:子节点内容（特点：没有子节点则没有这个属性,否则是一个或者一个数组）
        index:0
    }
}
```
3. ReactDOM.render把虚拟DOM对象变成真实的DOM对象（渲染到页面中）
::: danger
vue中通过Vue-loader把template语法解析为虚拟DOM对象  _vnode
:::

## 实现虚拟DOM转化真实DOM

实现虚拟DOM转化真实DOM：
```js
export function createElement(type,props,…childs){

    let obj = {};
    obj.type = type;
    obj.props = props || {}
    if(childs.length > 0){
        obj.props.children =  childs.length === 1 ? childs[0] : childs;
    }
    
    return obj;
}


export function render(jsxOBJ,container,callback){

    let {
        type,    
        props
    } = jsxOBJ;

    let element = document.createElement(type);
    for(let key in props){
    
        if(!props.hasOwnProperty(key)) break;
        
        if(key === ‘className’){
            element.className = props[‘className’];
            continue;        }
        }

        if(key === ’style’){
           let sty = props[’style’];
           for(let attr in sty){
              if(!sty.hasOwnProperty(attr)) break; 
              element[’style’][attr] = sty[’attr’];
           }
            continue;
        }


        if(key === ‘children’){
            let children = props[‘children’];
            children = Array.isArray(children) ? children : [children]

            children.forEach(item => {
                if(typeOf item === ’string’){
                    element.appendChild(document.createTextNode(item))
                    return;
                }
                render(item,element);
            })
            continue;
        }

        element.setAttribute(key,props[key]);

        container.appendChild(element);
        callback && callback();
    
}
```


## React中的组件

React中的组件：每一个组件都是一个单独的个体（数据私有、有自己完整的生命周期、有自己的视图）

1. 函数式组件
只要让函数返回一个JSX元素即可（掌握：props）
特点：简单（开发简单和渲染也快），但一旦组件被调用，内容渲染完成，当前组件的信息基本就不会变了，除非再调用传递不同的数据。没有state 和生命周期函数

2. 基于React.Component类创建组件
当ReactDOM.render渲染的时候，如果发现虚拟DOM中的type是一个类组件，会创建这个类的实例，并且把解析出来的props传递给这个类`new Clock(props)`  => 先执行`Constructor` （此时props并未挂载到实例上，基于this.props不能获取到值，但是可以直接使用形参中的props）

3. React Hook

## render函数
在ReactDOM.render 进行处理的时候，如果发现type不是标签字符串，而是一个函数（一个类）则会把函数执行
（创建类的一个实例），与此同时会把调用组件的时候，设置的属性传递给这个函数或者这个类

componentDidMount()  第一次家在组建渲染完毕等价于vue中的mounted
this.state.time = 'hahhah'  这样确实可以修改状态信息，但不会通知组件重新渲染。每一次修改状态应该基于：setState方法。partialState：部分状态（对象），我们初始化状态有很多，想修改谁，这块只写谁即可。(REACT内部是把之前的状态和传递的partialState进行合并替换的)  `Object.assign(this.state,partialState)`
setState大部分情况下是异步的，在原生事件中与setTimeout同步


## 单向数据流
单项数据流 父组件传递给子组件的属性  是不能更改的。那什么时候能改呢? 设置默认值、让父组件重新调取子组件传递不同的属性、把获取的属性赋值给组件的状态，后期修改状态也可以

## 受控组件和非受控组件
受控组件：我们把基于状态（或属性）的更新来驱动视图渲染叫做受控组件
非受控组件：不受状态管控（直接操作DOM）


## 生命周期
1. 处理属性（获取默认值和校验传递属性的类型）
2. 处理状态（执行constructor获取初始的状态信息）
3. componentWillMount  第一次渲染组件之前 从服务器获取数据（把获取的数据重新赋值给状态或者存放到Redux中）
4. render函数执行：第一次或重新进行视图渲染
5. componentDidMount ： 第一次渲染完成  （此处可以获取到DOM元素）


## 更新状态后
是否更新组件
```js
shouldComponentUpdate（nextProps，nextState）{
    当我们执行setState等操作，首先触发的是当前钩子函数
    this.state当前的状态（改之前的状态）
    nextState即将要修改的状态
    this.props 和 nextProps和状态一样的意思  
    钩子函数返回true代表允许重新渲染视图，反之false停止渲染
}
```

### Redux 三个小坑
1. store 必须是唯一的，多个store是坚决不允许的，只能有一个store空间
2. 只有store能改变自己的内容，Reducer不能改变

3. Reducer必须是纯函数  （返回的值必须要由传入的参数决定的，依赖传入的参数）


## PWA组成技术
1. Service Worker
2. Promise
3. fetch
4. Cache API
5. Notification API


## Immutable作用？
immutable对象是不可直接赋值的对象，它可以有效的避免错误赋值的问题

## 组件是什么？类是什么？类被编译成什么？
组件其实就是页面的一部分，类是一个构造函数，编译成构造函数

## reselect是做什么使用的？
相当于vue中computed 派生数据

## 什么情况下使用异步组件？
Reloadable库
和路由懒加载 按需加载很相似  
`import(‘./home/header’).then()`

`xss`攻击在react中如何防范?
慎用`dangerouslySetInnerHTML`



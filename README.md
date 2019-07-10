## 笔记记录

### Fragment作用
  React 中一个常见模式是为一个组件返回多个元素。 片段(fragments) 可以让你将子元素列表添加到一个分组中，并且不会在DOM 中增加额外节点。

### 当组件的state和props发生改变的时候，render函数就会重新执行

### setState(nextState, callback)
  nextState: 对象/函数<br>，函数称为状态计算函数，结构为function(state, props) => newState。这个函数会将每次更新加入队列中，执行时通过当前的state和props来获取新的state。<br>
  callback: 回调函数。

### React中的事件处理
  在React元素中绑定事件有两点需要注意：<br>
  （1）在React中，事件命名采用驼峰命名方式，而不是DOM元素中的小写字母命名方式。例如onclick要写成onClick，onchange要写成onChange等。<br>
  （2）处理事件的响应函数要以对象的形式赋值给事件属性，而不是DOM中的字符串形式。例如在DOM中绑定一个点击事件应该写成：<br>
  ```
  <button onclick="clickButton()">
    Click
  </button>
  ```
  而在React元素中绑定一个点击事件变成这种形式：
  ```
  <button onClick={clickButton}>  // clickButton是一个函数
    Click
  </button>
  ```

### React事件处理的this处理
  ES6 class并不会为方法自动绑定this到当前对象。
#### 使用箭头函数
  直接在React元素中采用箭头函数定义事件的处理函数，如：
  ```
  class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0
      }
    }

    render() {
      return (
        <button onClick={(event) => {
            console.log(this.state.number);
          }}>
          Click
        </button>
        )
    }
  }
  ```
  箭头函数中的this指向的是函数定义时的对象，所以可以保证this总是指向当前组件的实例对象。
  > 当事件处理逻辑比较复杂时，如果把所有的逻辑直接写在onClick的大括号中，就会导致render函数变的臃肿，不容易直观地看出组件的UI结构，代码可读性也不好。这样，我们可以把逻辑处理封装成组件的一个方法，然后在箭头函数中调用该方法即可。
#### React生命周期
  ![生命周期](https://user-gold-cdn.xitu.io/2017/11/11/88e11709488aeea3f9c6595ee4083bf3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "React生命周期")
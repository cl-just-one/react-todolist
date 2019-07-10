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
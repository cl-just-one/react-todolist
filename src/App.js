import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    // 当组件的state和props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
  }
  handleInputChange() {
    // const value = e.target.value;
    const value = this.input.value;
    this.setState(() => {
      return {
        inputValue: value
      }
    });
  }
  submitInputChange() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    }, () => {
      console.log(this.ul.querySelectorAll('div').length);
    })
  }
  delItem(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list: list
      }
    })
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // <li key={index} onClick={this.delItem.bind(this, index)}>{item}</li>
        <TodoItem key={index} content={item} index={index} delItem={this.delItem.bind(this, index)}/>
      )
    })
  }
  // 组件渲染之前执行
  componentWillMount() {
    console.log("componentWillMount");
  }
  // 组件渲染完成执行
  componentDidMount() {
    console.log("componentDidMount");
    axios.get('/api/todolist').then((res) => {
      console.log(res.data);
      this.setState(() => {
        return {
          list: res.data
        }
      })
      
    }, (err) => {
      console.log(err);
    })
  }
  // 组件是否应该更新
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  // 组件将要更新
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  // 组件更新完成
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <Fragment>
        <div>
          <label htmlFor="inputValue">输入内容：</label>
          <input id="inputValue"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            ref={(input) => {this.input = input}}/>
          <button onClick={this.submitInputChange.bind(this)}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul = ul}}>
          { this.getTodoItem() }
        </ul>
      </Fragment>
    );
  }
}

export default App;

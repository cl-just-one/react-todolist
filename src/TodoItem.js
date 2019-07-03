import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{
  // 从父组件接收属性
  // 第一次渲染不执行
  // 第二次加载
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }
  // 组件是否应该更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (nextProps.content !== this.props.state) {
      console.log("child shouldComponentUpdate");
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { content, index, delItem, test } = this.props
    return(
      <div onClick={delItem.bind(this, index)}>
        {test} - {content}
      </div>
    )
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number,
  delItem: PropTypes.func
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;
import React, { Component, Fragment } from 'react';

class Transtion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  toggle() {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello world!</div>
        <button onClick={() => {this.toggle()}}>toggle</button>
      </Fragment>
    )
  }
}

export default Transtion;
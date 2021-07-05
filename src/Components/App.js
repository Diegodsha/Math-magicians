import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../Logic/Calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    // const { calculation } = calculate(this.state, buttonName);
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    // const result = next ? next && next.toString() : total && total.toString();
    return (
      <>
        <Display result={total || next || '0'} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

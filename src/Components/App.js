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
  }

  handleClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <Display result={next || total || '0'} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

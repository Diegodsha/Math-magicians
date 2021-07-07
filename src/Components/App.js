import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/Calculate';

const App = () => {
  const [State, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(calculate(State, buttonName));
  };

  return (
    <>
      <Display result={State.next || State.total || '0'} operation={State.operation} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;

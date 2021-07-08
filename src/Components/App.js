import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/Calculate';

const CalcWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
`;

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
    <CalcWrapper>
      <Display
        result={State.next || State.total || '0'}
        operation={State.operation}
      />
      <ButtonPanel clickHandler={handleClick} />
    </CalcWrapper>
  );
};

export default App;

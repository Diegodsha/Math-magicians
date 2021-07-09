import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../Logic/Calculate';

const CalcWrapper = styled.div`
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  max-width: 700px;
`;

export const TextWithShadow = styled.p`
text-shadow: 2px 2px 2px black;
`;

const Calculator = () => {
  const [State, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setState(calculate(State, buttonName));
  };

  return (
    <div className="row g-0 justify-content-center justify-content-lg-between">
      <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
        <TextWithShadow className="display-1 text-center text-white  ">Let&apos;s do some math</TextWithShadow>
      </div>
      <CalcWrapper className="col-12 col-md-7 ">
        <Display
          result={State.next || State.total || '0'}
          operation={State.operation}
        />
        <ButtonPanel clickHandler={handleClick} />
      </CalcWrapper>
    </div>
  );
};

export default Calculator;

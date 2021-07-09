import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>
      <div style={{ height: '100px' }}>
        <Button name="AC" clickHandler={handleClick} color="#f72020" />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div style={{ height: '100px' }}>
        <Button name="7" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="8" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="9" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div style={{ height: '100px' }}>
        <Button name="4" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="5" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="6" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div style={{ height: '100px' }}>
        <Button name="1" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="2" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="3" clickHandler={handleClick} color="#d7d7d7" />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div style={{ height: '100px' }}>
        <Button name="0" clickHandler={handleClick} color="#d7d7d7" wide="true" />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const btnNumber = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

const StyledButton = styled.button`
  width: ${(props) => (props.wide ? '50%' : '25%')};
  background-color: ${(props) => props.color};
  height: 100%;
  border-radius: 5px;
  border: 2px solid black;
  font-size: 2.5rem;

  &:hover {
    background-color: ${(props) => (
    btnNumber.includes(props.name) ? 'gray' : props.color)};
  }
`;

const Button = ({
  name, clickHandler, color, wide,
}) => (
  <StyledButton
    wide={wide}
    color={color}
    type="button"
    name={name}
    onClick={() => clickHandler(name)}
  >
    {name}
  </StyledButton>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
  wide: '',
};

export default Button;

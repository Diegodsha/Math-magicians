import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TotalDisplay = styled.div`
  background-color: gray;
  height: 100px;
  color: white;
  font-weight: bold;
  font-size: 3rem;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 7px;
`;

const Display = ({ result }) => <TotalDisplay>{result}</TotalDisplay>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;

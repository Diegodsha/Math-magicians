import React from 'react';
import error from '../assets/error.jpg';

const Error = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <p className="text-danger display-1">Opps!!</p>
    <img
      style={{ width: '404px', borderRadius: '0.5rem' }}
      src={error}
      alt="error"
    />
    <p className="text-danger display-1">Page Not Found</p>
  </div>
);

export default Error;

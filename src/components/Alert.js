import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <div className={`bg-${type} text-white px-3 rounded`}>{text}</div>
  );
};

export default Alert;

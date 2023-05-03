import React from 'react';

const Alert = ({ type, text }) => {
  return (
    <span className="d-flex justify-content-center text-center rounded-circle">
      <div className={`bg-${type} text-white w-50`}>{text}</div>
    </span>
  );
};

export default Alert;

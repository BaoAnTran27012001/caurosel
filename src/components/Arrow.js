import React from 'react';

const Arrow = ({icon,onHandleClick,className}) => {
  return (
    <div className={className} onClick={onHandleClick}>
      {icon}
    </div>
  );
};

export default Arrow;

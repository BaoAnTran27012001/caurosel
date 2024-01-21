import React from 'react';

const Image = ({image}) => {
  return (
    <div  className='slide'>
      <img src={image} alt='images' />
    </div>
  );
};

export default Image;

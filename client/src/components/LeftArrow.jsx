import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="leftArrow">
      <i className="fa fa-angle-left fa-3x" aria-hidden="false" onClick={props.moveLeft}></i>
    </div>
  );
}

export default LeftArrow; 
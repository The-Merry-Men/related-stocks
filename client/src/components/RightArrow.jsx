import React from 'react';

const RightArrow = (props) => {
  return (
    <div className="rightArrow">
      <i className="fa fa-angle-right fa-3x" onClick={props.moveRight}></i>
    </div>
  );
}

export default RightArrow;
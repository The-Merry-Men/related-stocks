import React from 'react';

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.moveLeft}>
      <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
    </div>
  );
}



export default LeftArrow; 
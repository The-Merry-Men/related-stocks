import React from 'react';

//need to add functionality to the 'onClick' function here 

const LeftArrow = (props) => {
  return (
    <div className="backArrow" onClick={props.moveLeft}>
      <i className="fa fa-angle-left fa-3x" aria-hidden="true"></i>
    </div>
  );
}



export default LeftArrow; 
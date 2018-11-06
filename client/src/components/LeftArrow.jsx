import React from 'react';
import style from '../styles/leftArrow.css'

const LeftArrow = (props) => {
  return (
    <div className={style.leftArrow}>
      <i className="fa fa-angle-left fa-3x" aria-hidden="false" onClick={props.moveLeft}></i>
    </div>
  );
}

export default LeftArrow; 
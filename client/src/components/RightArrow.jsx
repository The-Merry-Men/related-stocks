import React from 'react';
import style from '../styles/rightArrow.css'

const RightArrow = (props) => {
  return (
    <div className={style.rightArrow}>
      <i className="fa fa-angle-right fa-2x" onClick={props.moveRight}></i>
    </div>
  );
}

export default RightArrow;
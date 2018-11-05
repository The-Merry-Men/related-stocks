import React from 'react';
import CompanyPage from './CompanyPage.jsx'
import RightArrow from '../components/RightArrow.jsx'
import LeftArrow from '../components/LeftArrow.jsx'
import style from '../styles/carousel.css'

function Carousel(props){
    return(
        <div className={style.carousel}>
            <LeftArrow moveLeft={props.moveLeft} />
            <RightArrow moveRight={props.moveRight} />
            <CompanyPage companies={props.companies} />
        </div>
    );
}

export default Carousel;
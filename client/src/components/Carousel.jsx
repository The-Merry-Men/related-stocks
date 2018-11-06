import React from 'react';
import CompanyPage from './CompanyPage.jsx'
import style from '../styles/carousel.css'

function Carousel(props){
    return(
        <div className={style.carousel}>
            <CompanyPage companies={props.companies} />
        </div>
    );
}

export default Carousel;
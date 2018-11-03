import React from 'react';
import CompanyPage from './CompanyPage.jsx'
import RightArrow from '../components/RightArrow.jsx'
import LeftArrow from '../components/LeftArrow.jsx'

function Carousel(props){
    return(
        <div className="carousel">
        <LeftArrow moveLeft={props.moveLeft}/>
        <RightArrow moveRight={props.moveRight} />
        <CompanyPage companies={props.companies} />
        </div>
    ); 
}

export default Carousel; 
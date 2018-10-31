import React from 'react';
import CompanyPage from './CompanyPage.jsx'

function Carousel(props){
    return(
        <ul className="carousel-container">
            <CompanyPage companies={props.companies} moveLeft={props.moveLeft} moveRight={props.moveRight}
                         center={props.center} left={props.left} right={props.right}/>
        </ul>
    ); 
}


export default Carousel; 
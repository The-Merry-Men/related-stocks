import React from 'react';
import CompanyPage from './CompanyPage.jsx'

function Carousel(props){
    return(
        <ul className="carousel-container">
            <CompanyPage companies={props.companies}/>
        </ul>
    ); 
}


export default Carousel; 
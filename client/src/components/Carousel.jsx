import React from 'react';
import CompanyPage from './CompanyPage.jsx'

function Carousel(props){
    return(
        <div className="carousel">
        <CompanyPage companies={props.companies} />
        </div>
    ); 
}

export default Carousel; 
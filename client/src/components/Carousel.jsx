import React from 'react';
import CompanyPage from './CompanyPage.jsx'

function Carousel(props){
    return(
      <div className="carousel">
        <ul className="flex-container">
            <CompanyPage companies={props.companies}/>
        </ul>
      </div>
    ); 
}


export default Carousel; 
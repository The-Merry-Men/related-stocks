import React from 'react'; 
import RightArrow from '../components/RightArrow.jsx'
import LeftArrow from '../components/LeftArrow.jsx'

function CompanyPage(props) {
    let newCompany = props.companies.map((company) =>
        <div className="flex-box">
            <div className="company-name"><p>{company.companyName}</p></div>
            <div className="approval-rating">
                <i className="fa fa-tag fa-xs"></i>
                <div className="tooltip">{company.percentageApproved}%
                    <span className="tooltiptext">{company.percentageApproved}% of analysts agree {company.companyName} is a buy.</span>
                </div>
            </div>
            <div className="stock-price">${company.currentPrice}.99</div>
            <div className="price-fluctuation">+{company.percentageChange/100}%</div>
        </div>
    ); 


//   
    return(
        <div className="main-container"><h1>People Also Bought</h1>
            <div className="related-company-row">
                <LeftArrow moveLeft={props.moveLeft}/>
                    {newCompany}
                <RightArrow moveRight={props.moveRight}/>
            </div>
        </div>
    )
}

export default CompanyPage;

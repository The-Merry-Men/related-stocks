import React from 'react'; 
import RightArrow from '../components/RightArrow.jsx'
import LeftArrow from '../components/LeftArrow.jsx'

function CompanyPage(props) {
    let newCompany = props.companies.map((company) =>
        <div className="stock-card">
                <div className="company-name">{company.companyName}
                <div className="approval-rating">
                    <i className="fa fa-tag fa-rotate-90 fa-xl"></i>
                    <div className="tooltip"> {company.percentageApproved}%
                        <span className="tooltiptext">{company.percentageApproved}% of analysts agree {company.companyName} is a buy.</span>
                    </div>
                </div>
            </div>
            <div className="stock-price">${company.currentPrice}.99
             <div className="price-fluctuation">+{company.percentageChange/100}%</div>
            </div>
        </div>
    ); 


    return(
        <div className="wrapper">
            <div className="related-company-row">
                <LeftArrow />
                    {newCompany}
                <RightArrow />
            </div>
        </div>
    )

}

export default CompanyPage;

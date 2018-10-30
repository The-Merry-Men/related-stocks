import React from 'react'; 

function CompanyPage(props) {
    let newCompany = props.companies.map((company) =>
        <ul className="flex-item">
            <li className="company-name">{company.companyName}</li>
            <li className="approval-rating"><i className="fa fa-tag"></i><div className="tooltip">{company.percentageApproved}%<span className="tooltiptext">{company.percentageApproved}% of analysts agree {company.companyName} is a buy.</span></div></li>
            <li className="stock-price">${company.currentPrice}.99</li>
            <li className="price-fluctuation">+{company.percentageChange/100}%</li>
        </ul>
    ); 

  
    return(
        <div className="related-company">{newCompany}</div>
    )
}

export default CompanyPage;
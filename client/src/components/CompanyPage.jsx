import React from 'react'; 


function CompanyPage(props) {
    console.log(props); 
    let newCompany = props.companies.map((company) => {
        <div className="company-page">  
            <div className="company-name">{company.companyName}</div>
            <div className="approval-rating"><i className="fa fa-tag"></i>{company.percentageApproved}%</div>
            <div className="stock-price">${company.currentPrice}.99</div>
            <div className="price-fluctuation">{company.percentageChange}%</div>
        </div>
    }); 

    return(
        <div className="related-company">{newCompany}</div>
    )
}


export default CompanyPage;

// 

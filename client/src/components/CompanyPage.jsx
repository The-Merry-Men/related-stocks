
import React from 'react'; 


function CompanyPage(obj) {
    const newCompany = {
        companyName: 'Hack Reactor', 
        approvalRating: 90, 
        stockPrice: 29,
        priceFluctuation: 2
    }
    
    let companyPage = (
    <div className="company-page">  
        <div className="company-name">{newCompany.companyName}</div>
        <div className="approval-rating">{newCompany.approvalRating}</div>
        <div className="stock-price">{newCompany.stockPrice}</div>
        <div className="price-fluctuation">{newCompany.priceFluctuation}</div>
    </div>
  )

  return(
    <div className="related-company">{companyPage}</div>
  )

}


export default CompanyPage;

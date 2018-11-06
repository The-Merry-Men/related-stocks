import React from 'react'; 
import style from '../styles/companyPage.css'; 

function CompanyPage(props) {
    let newCompany = props.companies.map((company) =>
        <div className={style.stockCard}>
                <div className={style.companyName}>{company.companyName}
                <div className={style.approvalRating}>
                    <i className="fa fa-tag fa-rotate-90 fa-xl"></i>
                    <div className={style.tooltip}> {company.percentageApproved}%
                        <span className={style.tooltiptext}>{company.percentageApproved}% of analysts agree {company.companyName} is a buy.</span>
                    </div>
                </div>
            </div>
            <div className={style.stockPrice}>${company.currentPrice.toFixed(2)}
             <div className={style.priceFluctuation}>+{company.percentageChange/100}%</div>
            </div>
        </div>
    ); 


    return(
        <div className={style.companyPageRow}>
                {newCompany}
        </div>
    )

}

export default CompanyPage;

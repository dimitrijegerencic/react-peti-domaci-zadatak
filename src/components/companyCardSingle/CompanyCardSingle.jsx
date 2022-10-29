import React from "react";
import classes from './companyCardSingle.module.scss';
import CardImg from '../../images/Group 1937.svg';

const CompanyCardSingle = ({title, description1, description2}) => {
    return <div className={classes['container']}>
        <div className={classes['left']}>
            <img src={CardImg} alt="investment"/>
        </div>
        <div className={classes['right']}>
            <h1>{title}</h1>
            <div className={classes['descriptions']}>
                <p className={classes['descrp1']}>{description1}</p>
                <p className={classes['descrp2']}>{description2}</p>
            </div>
        </div>
    </div>
}

export default CompanyCardSingle;
import React from "react";
import classes from './CompanyCardDouble.module.scss';

const CompanyCardDouble = ({image, title, text}) => {
    return <div className={classes['container']}>
        <div className={classes['image-section']}>
            <img src={image} alt="Company card"/>
        </div>
        <div className={classes['title-text']}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    </div>
}

export default CompanyCardDouble;
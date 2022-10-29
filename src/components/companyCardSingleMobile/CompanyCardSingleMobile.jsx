import React from "react";
import classes from './CompanyCardSingleMobile.module.scss';

const CompanyCardSingleMobile = ({image, title, text1, text2}) => {
    return <div className={classes['container']}>
        <div className={classes['image-section']}>
            <img src={image} alt="" style={{width:"344px", height:"189px"}}/>
        </div>
        <div className={classes['title-text']}>
            <h1>{title}</h1>
            <p className={classes['text1']}>{text1}</p>
            <p className={classes['text2']}>{text2}</p>
        </div>
    </div>
}

export default CompanyCardSingleMobile;
import React from "react";
import classes from './Icon.module.scss';

const Icon = ({image, title}) => {
    return <div className={classes['icon-container']}>
        <div>
            <img src={image} alt={title}/>
            <a href="#introduction"><h4>{title}</h4></a>
        </div>

    </div>
}

export default Icon;
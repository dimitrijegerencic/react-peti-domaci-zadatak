import React from "react";
import classes from './PieCard.module.scss';

const PieCard = ({image, title, text}) => {
    return <div className={classes['container']}>
        <div>
            <img src={image} alt="company poster"/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    </div>
}

export default PieCard;
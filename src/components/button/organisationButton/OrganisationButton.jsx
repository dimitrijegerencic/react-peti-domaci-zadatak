import React from "react";
import classes from './OrganisationButton.module.scss';

const OrganisationButton = ({text}) => {
    return <button className={classes['button']}>
        {text}
    </button>
}

export default OrganisationButton;
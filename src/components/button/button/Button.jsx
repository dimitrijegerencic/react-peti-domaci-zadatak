import React from "react";
import classes from './Button.module.scss';

const Button = ({label}) => {
    return <button className={classes['button']}>{label}</button>
}

export default Button;
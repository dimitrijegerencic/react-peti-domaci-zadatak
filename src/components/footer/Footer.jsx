import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
    return <div className={classes['footer']}>
        <div className={classes['left']}>
            <p>© All rights reserved 2021 Flourish</p>
        </div>
        <div className={classes['right']} >
            <p>info@flourish.me +382 20 000 000</p>
        </div>
    </div>
}

export default Footer;

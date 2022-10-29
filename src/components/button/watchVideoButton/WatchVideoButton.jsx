import React from "react";
import WatchImg from '../../../images/Group 2203.svg';
import classes from './WatchVideoButton.module.scss';

const WatchVideoButton = () => {
    return <button className={classes['watch-button']}>
        <div className={classes['left']}>
            <img src={WatchImg} alt="watch" />
        </div>
        <div className={classes['right']}>
            <p className={classes['title']}>WATCH OUR VIDEO</p>
        </div>
    </button>
}

export default WatchVideoButton;
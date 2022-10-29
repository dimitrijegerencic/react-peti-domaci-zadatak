import React from "react";
import Button from "../../../components/button/button/Button";
import Logo from "../../../images/Group 1889.svg";
import classes from './IntroductionMobile.module.scss';
import IntroductionImg from "../../../images/flourish.png";
import DownloadArrow from "../../../images/Group 2207.svg";

const IntroductionMobile = () => {

    return <section className={classes['container']}>
        <div className={classes['logo-section']}>
            <img src={Logo} alt="flourish"/>
        </div>
        <div className={classes['mobile-dashboard']}>
            <img src={IntroductionImg} alt="flourish dashboard"/>
        </div>
        <div className={classes['second']}>
            <h3 className={classes['title']}>Smart Employee Growth Assistant</h3>
            <p className={classes['introductory-text']}>Emotional intelligence directly affects job efficiency & employee satisfaction</p>
            <Button label={"LAUNCH ASSISTANT"}/>
        </div>
        <div className={classes['download-section']}>
            <h4>DOWNLOAD</h4>
            <img src={DownloadArrow} alt="download now"/>
        </div>

    </section>
}

export default IntroductionMobile;
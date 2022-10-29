import React from "react";
import Button from "../../../components/button/button/Button";
import Logo from "../../../images/Group 1889.svg";
import classes from './Introduction.module.scss';
import PlayStoreImg from "../../../images/Group 2205.svg";
import AppleStoreImg from "../../../images/Group 2206.svg";
import IntroductionImg from "../../../images/flourish.png";

const Introduction = () => {

    return <section className={classes['container']} id={'introduction'}>
       <div>
           <div className={'logo-section'}>
               <img src={Logo} alt="flourish"/>
           </div>
           <h3 className={classes['title']}>Smart Employee Growth Assistant</h3>
           <p className={classes['introductory-text']}>Emotional intelligence directly affects job efficiency & employee satisfaction</p>
            <Button label={"LAUNCH ASSISTANT"}/>
           <div className={classes['download-section']}>
               <img src={PlayStoreImg} alt=""/>
               <img src={AppleStoreImg} alt=""/>
           </div>
       </div>
        <div>
            <img src={IntroductionImg} alt="away Dashboard"/>
        </div>


    </section>
}

export default Introduction;
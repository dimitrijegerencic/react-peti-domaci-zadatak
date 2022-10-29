import React from "react";
import Logo from '../../images/Group 1889.svg'
import classes from './WelcomePage.module.scss';
import Icon from "../../components/icon/Icon";
import desktopIcon from '../../images/computer-screen-6836.svg';
import mobileIcon from '../../images/mobile-phone-2642.svg';

const WelcomePage = () => {

    const icons = [
        {
            image: desktopIcon,
            title: "DESKTOP"
        },
        {
            image: mobileIcon,
            title: "MOBILE"
        }
    ]

    return <div className={classes['welcome']}>
        <img src={Logo} alt="flourish"/>
        <div className={classes['versions']}>
            {
                icons.map((item, index) => <Icon
                    key={`${item.title}-${index}`}
                    title={item.title}
                    image={item.image}/>)
            }
        </div>

    </div>
}

export default WelcomePage;
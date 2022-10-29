import React from "react";
import classes from './Supports.module.scss';
import supportImg1 from '../../../images/Group 1882.png';
import supportImg2 from '../../../images/Group 1883.png';
import supportImg3 from '../../../images/Group 1885.png';

const Supports = () => {

    const supports = [
        {
            image : supportImg1,
            alt : 'EU4Tech'
        },
        {
            image : supportImg2,
            alt : 'Boost'
        },
        {
            image : supportImg3,
            alt : 'boostMeUp'
        },

    ]

    return <div className={classes['main']}>
        <h1>Supported by</h1>
        <div className={classes['image-container']}>
            {
                supports.map((item, index) =>
                    <div>
                        <img src={item.image}  key={`${item.title}-${index}`} alt={item.alt}/>
                    </div>)
            }
        </div>
    </div>
}

export default Supports;
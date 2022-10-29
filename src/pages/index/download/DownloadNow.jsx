import React from "react";
import classes from './DownloadNow.module.scss';
import downloadImg1 from '../../../images/Group 2205.svg';
import downloadImg2 from '../../../images/Group 2206.svg';

const DownloadNow = () => {

    const downloads = [
        {
            image : downloadImg1,
            alt : 'Google Play'
        },
        {
            image : downloadImg2,
            alt : 'App Store'
        }
    ]

    return <div className={classes['main']}>
        <h1>Download now</h1>
        <div className={classes['image-container']}>
            {
                downloads.map((item, index) =>
                    <div>
                        <img src={item.image}  key={`${item.title}-${index}`} alt={item.alt}/>
                    </div>)
            }
        </div>
    </div>
}

export default DownloadNow;

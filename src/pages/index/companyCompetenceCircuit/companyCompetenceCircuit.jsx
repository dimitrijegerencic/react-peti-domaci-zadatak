import React from "react";
import classes from './companyCompetenceCircuit.module.scss';
import CompanyCardSingle from "../../../components/companyCardSingle/CompanyCardSingle";
import CompanyCardDouble from "../../../components/companyCardDouble/CompanyCardDouble";
import CompanyCardSingleMobile from "../../../components/companyCardSingleMobile/CompanyCardSingleMobile";
import PieCard from "../../../components/pieCard/PieCard";
import pieImg1 from '../../../images/Mask Group 18.svg';
import pieImg2 from '../../../images/Mask Group 19.svg';
import pieImg3 from '../../../images/Mask Group 20.svg';
import cardImg1 from "../../../images/Group 1955.svg";
import cardImg2 from '../../../images/Group 1971.svg';
import mobileCardImg from '../../../images/Group 1937.svg'

const companyCompetenceCircuit = () => {

    const list = [
        {
            title: 'Boost employee performance',
            text: '30% increased team\'s performance',
            image: cardImg1
        },
        {
            title: 'Increase leadership capacity',
            text: '40% better decision making',
            image: cardImg2
        }
    ]

    const pieCards = [
        {
            title: 'Lunch break cake',
            text: 'Sweeten up your company life with 10 minutes per day',
            image: pieImg1
        },
        {
            title: 'Fee',
            text: 'Literally for free',
            image: pieImg2
        },
        {
            title: 'Theme park spark',
            text: 'Games, quizzes, community concept',
            image: pieImg3
        }
    ]

    return <div>
        <div className={classes['container-main']}>
            <h1 className={classes['first']}>COMPANY COMPETENCE</h1>
            <h1 className={classes['second']}>circuit</h1>
        </div>

        <CompanyCardSingleMobile
            image={mobileCardImg}
            title={'Straight return of investment'}
                           text1={'Soft skills training boosts productivity and retention by ' +
                               '12% and delivers a 250% return of investment within 8 months.*'}
                           text2={ <> <span style={{color: "#F90A8B"}}>*</span> According to a study by Boston College,
                                            Harvard University, and the University of Michigan.</>}
        />

        <CompanyCardSingle title={'Straight return of investment'}
                     description1={'Soft skills training boosts productivity and retention by ' +
                                    '12% and delivers a 250% return of investment within 8 months.*'}
                           description2 ={ <> <span style={{color: "#F90A8B"}}>*</span> According to a study by Boston College,
                                            Harvard University, and the University of Michigan.</>}
        />
        <div className={classes['double-cards']} >
            {
                list.map((item, index) => <CompanyCardDouble
                    key={`${item.title}-${index}`}
                    title={item.title}
                    text={item.text}
                    image={item.image}/>)
            }
        </div>

        <div className={classes['pie-cards-section']} >
            {
                pieCards.map((item, index) => <PieCard
                    key={`${item.title}-${index}`}
                    title={item.title}
                    text={item.text}
                    image={item.image}/>)
            }
        </div>


    </div>
}

export default companyCompetenceCircuit;
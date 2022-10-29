import React from "react";
import classes from './Organisations.module.scss';
import OrganizationButton from "../../../components/button/organisationButton/OrganisationButton";

const Organisations = () => {
    return <div className={classes['main']}>
        <div className={classes['container']}>
            <h1>Interested in the plan for <span>organisations?</span></h1>
            <div className={classes['btn-section']}>
                <OrganizationButton text={'Your plan is ready'}/>
            </div>
        </div>
    </div>

}

export default Organisations;
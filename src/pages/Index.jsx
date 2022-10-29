import React from "react";
import Introduction from "./index/introduction/Introduction";
import CompanyCompetenceCircuit from "./index/companyCompetenceCircuit/companyCompetenceCircuit";
import Organisations from "./index/organisations/Organisations";
import WatchVideoButton from "../components/button/watchVideoButton/WatchVideoButton";
import Supports from "./index/supports/Supports";
import DownloadNow from "./index/download/DownloadNow";
import Footer from "../components/footer/Footer";
import IntroductionMobile from "./index/introductionMobile/IntroductionMobile";

const Index = () => {
    return <div style={{position:"sticky", top:"0"}}>
        <Introduction/>
        <IntroductionMobile/>
        <CompanyCompetenceCircuit/>
        <Organisations/>
        <Supports/>
        <DownloadNow/>
        <WatchVideoButton/>
        <Footer/>
    </div>

}

export default Index;
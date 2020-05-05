import React from "react"
import Layout from '../components/Layout';
import StyledHero from '../components/Home/StyledHero';
import heroImage from '../images/cleanlabel-hero.png';
import Trending from '../components/Home/Trending';
import ZeroWaste from '../components/Home/ZeroWaste';
import Kits from '../components/Home/Kits';
import JoinUs from '../components/Home/JoinUs';
import PopularCategories from '../components/Home/PopularCategories';
import Community from '../components/Home/Community';
import Features from '../components/Home/Features';



export default () => {
    return (
    <Layout>
        <StyledHero img={heroImage} />
        <Trending />
        {/* <ZeroWaste /> */}
        <Kits />
        <JoinUs />
        <PopularCategories />
        <Community />
        {/* <Features /> */}
    </Layout>
)}

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

const list = [
    { id: 'item1', name: "Organic Basmati Rice1", price: 210 },
    { id: 'item2', name: "Organic Basmati Rice", price: 210 },
    { id: 'item3', name: "Organic Basmati Rice", price: 210 },
    { id: 'item4', name: "Organic Basmati Rice", price: 210 },
    { id: 'item5', name: "Organic Basmati Rice", price: 210 },
    { id: 'item6', name: "Organic Basmati Rice", price: 210 },
    { id: 'item7', name: "Organic Basmati Rice", price: 210 },
    { id: 'item8', name: "Organic Basmati Rice", price: 210 },
    { id: 'item9', name: "Organic Basmati Rice", price: 210 },
    { id: 'item10', name: "Organic Basmati Rice", price: 210 },
    { id: 'item11', name: "Organic Basmati Rice", price: 210 },
    { id: 'item12', name: "Organic Basmati Rice", price: 210 },
    { id: 'item13', name: "Organic Basmati Rice", price: 210 },
    { id: 'item14', name: "Organic Basmati Rice", price: 210 },
    { id: 'item15', name: "Organic Basmati Rice", price: 210 },
    { id: 'item16', name: "Organic Basmati Rice", price: 210 },
    { id: 'item17', name: "Organic Basmati Rice", price: 210 },
    { id: 'item18', name: "Organic Basmati Rice", price: 210 },
    { id: 'item19', name: "Organic Basmati Rice", price: 210 },
    { id: 'item20', name: "Organic Basmati Rice", price: 210 },
  ];



export default () => {
    return (
    <Layout>
        <StyledHero img={heroImage} />
        <Trending list={list} />
        <ZeroWaste />
        <Kits />
        <JoinUs />
        <PopularCategories />
        <Community />
        <Features />
    </Layout>
)}

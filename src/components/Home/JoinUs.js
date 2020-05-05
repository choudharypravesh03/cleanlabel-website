import React, {useState} from 'react'
import SectionHeader from '../Home/partials/SectionHeader';
import HorizontalScroll from '../HorizontalScroll'
import styled from 'styled-components';
import img1 from '../../images/joinus-1.png';
import img2 from "../../images/join-us-zero.png";
import img3 from "../../images/joinus-sustainability.png";
import {Link} from 'gatsby';

const list = [
    { id: 'item1', name: "Circular Economy", cta: "learn more", image: img1, backgroundColor: '#98C4C9' },
    { id: 'item2', name: "Zero Waste Completely Organic", cta: "learn more", image: img2, backgroundColor: '#DDA06F' },
    { id: 'item3', name: "Sustainability", cta: "learn more", image: img3, backgroundColor: '#FFC83D' },
    { id: 'item4', name: "Save on deposits with our subscriptions", cta: "subscribe now", image: "", backgroundColor: '#37A08E' }
];

const MenuItem = ({ text, price, selected, image, backgroundImage, cta, backgroundColor }) => {
    return (
      <MenuItemStyled 
        className={`menu-item ${selected ? "active" : ""}`}
        backgroundColor={backgroundColor}
      >
        <h3>{text}</h3>
        <img src={image} />
        <Link to="">{cta}</Link>
      </MenuItemStyled>
    );
};


const MenuItemStyled = styled.div`
  width: 321px;
  text-align: center;
  height: 465px;
  background: ${p => p.backgroundColor};
  font-family: 'UntitledSansLight', sans-serif;
  color: var(--mainWhite);
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
  user-select: none;
  border: none;
  padding: 27px 24px 15px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    font-size: 22px;
    line-height: 28px;
  }
  img {
    width: 156px;
    display: block;
    margin: auto;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    display: block;
    width: 100%;
    border: 1px solid var(--mainWhite);
    padding: 10px;
  }
`

const JoinUs = () => {
    const [selected, setSelected] = useState("Organic Basmati Rice1");
    return (
        <section>
            <div className="container">
                <SectionHeader title="Be a part of Cleanlabel life" />
                <HorizontalScroll
                    list={list}
                    transition={0.4}
                    hideArrows={false}
                    hideSingleArrow={true}
                    selected={selected}
                    translate={0}
                    alignCenter={false}
                    dragging={true}
                    clickWhenDrag={false}
                    wheel={false}
                    MenuItem={MenuItem}
                />
            </div>
        </section>
    )
}





export default JoinUs

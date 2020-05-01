import React, {useState} from 'react'
import SectionHeader from '../Home/partials/SectionHeader';
import HorizontalScroll from '../HorizontalScroll'
import styled from 'styled-components';
import img from '../../images/Group.png';
import {Link} from 'gatsby';

const list = [
    { id: 'item1', name: "Circular Economy", price: 210 },
    { id: 'item2', name: "Zero Waste Completely Organic", price: 210 },
    { id: 'item3', name: "Sustainability", price: 210 },
    { id: 'item4', name: "Save on deposits with our subscriptions", price: 210 },
];

const MenuItem = ({ text, price, selected }) => {
    return (
      <MenuItemStyled className={`menu-item ${selected ? "active" : ""}`}>
        <h3>{text}</h3>
        <img src={img} />
        <Link to="">Learn more</Link>
      </MenuItemStyled>
    );
};


const MenuItemStyled = styled.div`
  width: 321px;
  height: 465px;
  background: #ed907f;
  color: var(--mainWhite);
  border-radius: 3px;
  margin: 5px 10px;
  user-select: none;
  border: none;
  padding: 27px 24px;
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
    font-size: 20px;
    text-decoration: none;
    text-align: right;
    color: inherit;
    border-bottom: 1px solid;
    width: fit-content;
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

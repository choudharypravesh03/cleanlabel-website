import React, {useState} from 'react'
import SectionHeader from '../Home/partials/SectionHeader';
import HorizontalScroll from '../HorizontalScroll';
import img from '../../images/cleanlabel-prodcat1.png';
import {Link} from 'gatsby';
import styled from 'styled-components';

const list = [
    { id: 'item1', name: "Edible Oils", price: 210, backgroundImage: img },
    { id: 'item2', name: "Rice", price: 210, backgroundImage: img },
    { id: 'item3', name: "Pulses", price: 210, backgroundImage: img },
    { id: 'item4', name: "Flour", price: 210, backgroundImage: img },
    { id: 'item5', name: "Millets", price: 210, backgroundImage: img },
    { id: 'item6', name: "Sweetners", price: 210, backgroundImage: img },
    { id: 'item7', name: "Dry Fruits", price: 210, backgroundImage: img },
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

const MenuItem = ({ text, price, selected, backgroundImage }) => {
    return (
      <MenuItemStyled backgroundImage={backgroundImage} className={`menu-item ${selected ? "active" : ""}`}>
        <Link to="">
            <h3>{text}</h3>
        </Link>
      </MenuItemStyled>
    );
};


const MenuItemStyled = styled.div`
  width: 301px;
  height: 317px;
  background-image: linear-gradient(130.86deg, #000000 -2.4%, rgba(255, 255, 255, 0) 72.57%), url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  border-radius: 3px;
  margin: 5px 10px 5px 0px;
  user-select: none;
  border: none;
  padding: 27px 24px;
  h3 {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 0;
    color: var(--mainWhite);
  }
  a {
    text-decoration: none;
  }
`

const PopularCategories = () => {
    const [selected, setSelected] = useState("Organic Basmati Rice1");
    return (
        <section>
            <div className="container">
                <SectionHeader title="Popular Categories" />
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

export default PopularCategories

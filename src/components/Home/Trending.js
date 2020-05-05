import React, { useState } from 'react'
import HorizontalScroll from '../../components/HorizontalScroll';
import SectionHeader from '../Home/partials/SectionHeader';
import styled from 'styled-components';
import img from '../../images/cleanlabel-item-1.png';

const list = [
  { id: 'item1', name: "Filter Coffee without Chicory", price: 210 },
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

const Trending = () => {
    const [selected, setSelected] = useState("Organic Basmati Rice1");

    const onUpdate = ({ translate }) => {
        console.log(`onUpdate: translate: ${translate}`);
        //this.setState({ translate });
        // setTranslate(translate);
    };

    const onSelect = key => {
        console.log(`onSelect: ${key}`);
        setSelected(key);
    };

    const MenuItem = ({ text, price, selected }) => {
        return (
            <MenuItemStyled className={`menu-item ${selected ? "active" : ""}`}>
                <Image src={img} />
                <Content>
                  <p>Organic</p>
                  <p>{text}</p>
                  <p>-</p>
                  <p>Rs. {price} /Kg</p>
                </Content>
            </MenuItemStyled>
        );
    };


    const MenuItemStyled = styled.div`
      width: 300px;
      height: 310px;
      background: #ffffff;
      box-shadow: 0px 1px 10px rgba(242, 242, 242, 0.8);
      border-radius: 5px;
      text-align: center;
      margin: 5px 10px 5px 0px;
      user-select: none;
      cursor: pointer;
      border: none;
      padding: 27px;
      @media screen and (max-width: 768px) {
        width: 165px;
        height: 171px;
      }
    `

    const Image = styled.img`
      width: 100%;
      position: relative;
      bottom: 12px;
    `

    const Content = styled.div`
      font-size: 16px;
      text-align: left;
      p:nth-child(1) {
        font-size: 16px;
        color: #B8B7B7;
      }
      p:nth-child(4) {
        font-size: 20px;
        font-family: 'UntitledSansMedium', sans-serif;
      }
      @media screen and (max-width: 768px) {
        font-size: 12px;
        p:nth-child(1) {
          font-size: 12px;
          color: #B8B7B7;
          display: none;
        }
        p:nth-child(3) {
          display: none;
        }
        p:nth-child(4) {
          font-size: 12px;
          font-family: 'UntitledSansMedium', sans-serif;
        }
      }
    `


    return (
        <section>
            <div className="container">
                <SectionHeader title={"Trending"} />
                <HorizontalScroll
                    list={list}
                    transition={0.4}
                    hideArrows={false}
                    hideSingleArrow={true}
                    onUpdate={onUpdate}
                    onSelect={onSelect}
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

export default Trending

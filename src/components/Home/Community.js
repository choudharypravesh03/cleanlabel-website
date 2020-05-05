import React, {useState} from 'react'
import SectionHeader from '../Home/partials/SectionHeader';
import HorizontalScroll from '../HorizontalScroll';
import img from '../../images/cleanlabel-prodcat1.png';
import {Link} from 'gatsby';
import styled from 'styled-components';


const list = [
    { id: 'item1', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item2', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item3', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item4', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item5', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item6', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item7', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
    { id: 'item8', name: "Meenal, Bengaluru", price: "Used the oil other day and really liked it. Its thicker than the market counterparts, so I ended up using lesser amount. The colour and smell are natural that reminded me of my childhood days" },
  ];

const MenuItem = ({ text, price, selected, backgroundImage }) => {
    return (
      <MenuItemStyled backgroundImage={backgroundImage} className={`menu-item ${selected ? "active" : ""}`}>
            <div>
                <img src={img} />
            </div>
            <div>
                <h4>{text}</h4>
                <p>"{price}"</p>
            </div>
      </MenuItemStyled>
    );
};


const MenuItemStyled = styled.div`
  width: 605px;
  background-color: var(--mainWhite);
  height: 225px;
  background-image: url(${props => props.backgroundImage});
  border-radius: 3px;
  font-size: 14px;
  margin: 5px 10px 5px 0px;
  user-select: none;
  border: none;
  padding: 27px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 10px;
  }
  img {
      width: 83px;
      height: 83px;
      border-radius: 50%;
      margin-right: 42px;
  }
`

const Community = ({className}) => {
    const [selected, setSelected] = useState("Organic Basmati Rice1");
    return (
        <section className={className}>
            <div className="container">
                <SectionHeader title="Clean Label Community" />
                <div className="scroll-box">
                    <HorizontalScroll
                        list={list}
                        transition={0.4}
                        hideArrows={false}
                        hideSingleArrow={true}
                        selected={selected}
                        translate={1}
                        alignCenter={true}
                        dragging={true}
                        clickWhenDrag={false}
                        wheel={false}
                        MenuItem={MenuItem}
                    />
                </div>
            </div>
        </section>
    )
}

export default Community;

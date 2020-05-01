import React, {useState} from 'react'
import HorizontalScroll from '../../components/HorizontalScroll';
import SectionHeader from '../Home/partials/SectionHeader';
import styled from 'styled-components';
import img from '../../images/cleanlabel-item-1.png';

const Trending = ({list}) => {
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
            <img src={img} />
            <div>{text}</div>
            <div>Rs. {price}</div>
          </MenuItemStyled>
        );
    };
    
    
    const MenuItemStyled = styled.div`
      width: 254px;
      height: 270px;
      background: #FFFFFF;
      box-shadow: 0px 1px 10px rgba(242, 242, 242, 0.8);
      border-radius: 5px;
      text-align: center;
      margin: 5px 10px;
      user-select: none;
      cursor: pointer;
      border: none;
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

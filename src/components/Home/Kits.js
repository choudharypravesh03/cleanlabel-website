import React, {useState} from 'react'
import SectionHeader from '../Home/partials/SectionHeader';
import styled from 'styled-components';
import HorizontalScroll from '../HorizontalScroll';
import img1 from '../../images/cleanlabel-card1-background.png';


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

const Kits = ({className}) => {

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
                <div>
                    <h3 className="price">Rs. {price}/-</h3>
                    <p className="title">{text}</p>
                    <p className="subtitle">includes 1 kg of Rice, Wheat Flour, Toor Dal and Ground nut oil</p>
                </div>
            </MenuItemStyled>
        );
    };


    const MenuItemStyled = styled.div`
        width: 507px;
        height: 310px;
        margin: 5px 10px 5px 0px;
        background-image: url(${img1});
        background-repeat: no-repeat;
        padding: 29px;
        border-radius: 1px;
        color: var(--mainWhite);
        div {
            width: 253px;
        }
        .price {
            font-family: 'UntitledSansMedium', sans-serif;
            font-size: 36px;
            margin-bottom: 20px;
        }
        .title {
            font-family: 'UntitledSansMedium', sans-serif;
            margin-bottom: 5px;
        }
        .subtitle {
            font-family: 'UntitledSansLight', sans-serif;
            font-size: 14px;
        }
      @media screen and (max-width: 768px) {
        
      }
    `


    return (
        <section className={className}>
            <div className="container">
                <SectionHeader title="Bundles/Kits" />
                <div className="">
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
            </div>
        </section>
    )
}

export default Kits;

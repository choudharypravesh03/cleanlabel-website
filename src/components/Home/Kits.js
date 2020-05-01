import React from 'react'
import SectionHeader from '../Home/partials/SectionHeader';
import styled from 'styled-components';
import img1 from '../../images/cleanlabel-card1-background.png';
import img2 from '../../images/cleanlabel-card2-background.png';

const Kits = ({className}) => {
    return (
        <section className={className}>
            <div className="container">
                <SectionHeader title="Bundles/Kits" />
                <div className="cards-container">
                    <BackgroundImageCard
                        price="699"
                        title="Basic Essential Bundle"
                        subtitle="includes 1 kg of Rice, Wheat Flour, Toor Dal and Ground nut oil"
                        backgroundImage={img1}
                    />
                    <BackgroundImageCard
                        price="699"
                        title="Basic Essential Bundsle"
                        subtitle="includes 1 kg of Rice, Wheat Flour, Toor Dal and Ground nut oil"
                        backgroundImage={img2}
                    />
                </div>
            </div>
        </section>
    )
}

const BackgroundImageCard = ({price, title, subtitle, backgroundImage}) => {
    return (
        <>
            <StyledCard backgroundImage={backgroundImage}>
                <div className="price">Rs. {price}/-</div>
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    width: 49%;
    height: 702px;
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    padding: 37px;
    color: var(--mainWhite);
    .price {
        font-weight: bold;
        font-size: 36px;
        line-height: 45px;
        margin-bottom: 20px;
    }
`

export default styled(Kits)`
    .cards-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

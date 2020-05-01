import React from 'react'
import styled from 'styled-components';

const StyledHero = ({img, className, children, home}) => {
    return (
        <div className={className}>
            <div>
                <h1>Waste Less Live More</h1>
            </div>
            <div style={{backgroundImage: `url(${img})`}}></div>
        </div>
    )
}

export default styled(StyledHero)`
    display: flex;
    height: 610px;
    margin-top: 65px;
    & div:first-child {
        width: 30%;
        background-color: #10665C;
        & h1 {
            padding: 85px 20px 20px 60px;
            color: white;
            font-size: 60px;
        }
    }
    & div:last-child {
        width: 70%;
        background-repeat: no-repeat;
        background-size: cover;
    }
`

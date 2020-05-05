import React from 'react'
import styled from 'styled-components';

const Title = styled.h2`
    font-size: 30px;
    line-height: 32px;
    color: #161616;
    font-family: 'UntitledSansRegular', sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 18px;
    }
`

const HorizontalLine = styled.hr`
    margin: 14px 0px 20px -50px;
    border: 1px solid #E5E5E5;
}
`

const SectionHeader = ({title}) => {
    return (
        <div>
             <Title>{title}</Title>
             <HorizontalLine />
        </div>
    )
}

export default SectionHeader

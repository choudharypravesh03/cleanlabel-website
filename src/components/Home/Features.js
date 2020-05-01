import React from 'react'
import styled from 'styled-components';

const Features = ({className}) => {
    return (
        <section className={className}>
            <div className="feature-flex">
                <div>NO MIDDLEMAN<br/>DIRECT FARMERS</div>
                <div className="separator"></div>
                <div>100% Organic</div>
                <div className="separator"></div>
                <div>GENUINE SOURCE<br/>Every product can be traced to farm</div>
            </div>
        </section>
    )
}

export default styled(Features)`
    .feature-flex {
        display: flex;
        text-align: center;
        justify-content: space-around;
        align-items: center;
        height: 170px;
        background: #ED907F;
    }
    .separator {
        height: 120px;
        border: 1px solid black;
    }
`

import React from 'react'
import styled from 'styled-components';

const StyledHero = ({ img, className, children, home }) => {
    return (
        <section className={className}>
            <div className="hero-container">
                <div className="hero-container--flex">
                    <div className="content">
                        <h1>
                            <span>Waste Less</span><br />
                            <span>Live More</span></h1>
                    </div>
                    <div className="image">
                        <img src={img} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default styled(StyledHero)`
    background: var(--mainWhite);
    .hero-container {
        margin: auto;
        max-width: 1680px;
    }
    .hero-container--flex {
        height: 610px;
        min-height: 610px;
        margin-top: 65px;
        align-items: stretch;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        position: relative;
        text-align: left;
        overflow-x: hidden;
    }
    .content {
        color: var(--offBlack);
        font-size: 37.5px;
        font-family: 'UntitledSansMedium', sans-serif;
        padding: 7rem 7rem 5rem 7rem;
        align-self: flex-start;
        flex-grow: 1;
        flex-shrink: 1;
        width: 50%;
        max-width: 48rem;
        margin: 0 auto;
        padding: 5rem 5rem 3rem 5rem;
    }
    .image {
        flex-grow: 0;
        flex-shrink: 0;
        border-radius: 0;
        width: 50%;
        background-color: rgba(0, 0, 0, 0.125);
        border: 0;
        border-radius: 4px;
        display: inline-block;
        position: relative;

        img {
            object-position: right;
            object-fit: cover;
            object-position: center;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
        }
    }

    @media screen and (max-width: 736px) {
        .hero-container--flex {
            flex-direction: column-reverse;
        }
       .image {
           height: 60vh;
           width: 100%;
           max-width: 100%;
       }
       .content {
           height: 40vh;
           font-size: 23px;
           width: 100%;
           padding: 2rem 5rem 0rem 2rem;
           h1 {
            border-bottom: 1px solid var(--mainBlack);
           }
       }
    }
`

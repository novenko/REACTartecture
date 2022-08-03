import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled(NavLink)`
width: 45vw;
text-decoration: none;
height: 30rem;
padding: 1rem;
color: ${props => props.theme.text};
backdrop-filter: blur(2px);
cursor: pointer;
display: flex;
flex-direction: column;
z-index: 5;
&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
    transition: all 9s ease;
}
@media screen and (max-width: 600px) {
		height: 55vh;
		width: 75vw;
		background-position-y: 0px;
}
`

const Image = styled.div`
background-image: ${props => `url(${props.img})`};
width: 100%;
height: 100%;
background-size: cover;
border: 1px solid transparent;
background-position: center center;
${Box}:hover&{
    border: 1px solid ${props => props.theme.body};
}
`

const Title = styled.h3`
color: black;
padding: 0.5rem 0;
padding-top: 1rem;
font-family: monospace;
font-weight: 700;
border-bottom: 1px solid ${props => props.theme.text};
${Box}:hover&{
    border: 1px solid ${props => props.theme.body};
}
`

//<Box target="_blank" to={{pathname: link}}>
const ArchitectureCard = (props) => {
    const {name, imgSrc, link, seeMore } = props.blog;
    return (
         <Box target="_blank" to={{pathname: link}}>
            <Image img={imgSrc} />
            <Title>
                {name}
            </Title>

            <div className="read-more">
                {seeMore}
            </div>
        </Box>
    )
}

export default ArchitectureCard
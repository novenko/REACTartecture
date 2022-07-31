import React from "react";
import styled from "styled-components";
import LogoComponent from "../../subComponents/LogoComponent";

const Box =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 75vw;
  height: fit-content;

  z-index: 3;
  line-height: 1.5;
  font-family: monospace;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  left: 50%;
  transform: translate(-50%, 0);
  top: 5rem;
  font-family: 'Ubuntu Mono', monospace;

`


const CommunityCenter = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Stockholm Community Center</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">April 7, 2022</p>
              <p class="article-tags">
                <span class="tag">community</span> <span class="tag">center</span>
              </p>
            </div>
            <p>The community center is connecting its suroundings as a vibrant meeting point where culture and sport occur it the same space. Ostberga is a neighbourhood in Stockholm which in the close future will meet the new one Arstafaltet. I wanted to create a two faced building with easy access from both districts, two entrances that invites one in. Two longest facades of the designed center feature timber cladding thin gaps, creating patterns of light on the walls. The building has three main zones- sport hall with tribunes, library and reading/studying areas and concert hall. All of these spaces with different character ( movement, pause, performance) have their ‘face’ - glazed opening oriented towards Ostberga.
</p>
            <aside>
            <p>﹀</p>
            </aside>

            <figure>
                <img src="/img/CommunityCentre1.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                <img src="/img/CommunityCentre2.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                <img src="/img/CommunityCentre3.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                <img src="/img/CommunityCentre4.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                <img src="/img/CommunityCentre5.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                <img src="/img/CommunityCentre6.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
                <img src="/img/CommunityCentre7.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default CommunityCenter
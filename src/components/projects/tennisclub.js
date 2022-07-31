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


const TennisClub = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Tenis Club</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">June 21, 2021</p>
              <p class="article-tags">
                <span class="tag">modern</span> <span class="tag">dark</span> <span class="tag featured">bathroom</span>
              </p>
            </div>
            <p>The project provides tennis centre with other sport facilities for suwalki, currently fast growing city in the north of Poland. The building’s main architectural elements are 25 meters high steel pylons which carry out both the construction and visual function, inspired by calatrava’s bridge. The characteristic  and uniqe  part of the design is the glazed entrance which  shapes the form of a tenis net. To contribute daylight to the sport halls without disturbing users, the skylights have been placed, in the shape of a tenis ball. The building has been created in accordance with the sports standards, having in mind organization of local competitions.It contains all the supporting facilities both for professional and amateur training.</p>
            <aside>
              <p>﹀</p>
            </aside>

            <figure><img src="https://images.unsplash.com/photo-1503839769273-3a57baad6072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaHRlY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default TennisClub
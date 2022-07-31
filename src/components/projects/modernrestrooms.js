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


const ModernRestrooms = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Dark Themed Bathroom</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">June 21, 2021</p>
              <p class="article-tags">
                <span class="tag">modern</span> <span class="tag">dark</span> <span class="tag featured">bathroom</span>
              </p>
            </div>
            <p>It is animated by the speckled grey, stone tiles that line its walls and floor matched with the tactile black tiles. The bathroom is all black painted and warmed by wooden flat-panel cabinets.</p>
            <aside>
              <p>﹀</p>
            </aside>

            <figure>
              <img src="/img/Bathroom1.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
              <img src="/img/Bathroom2.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
              <img src="/img/Bathroom3.png" alt="a smiling person in a pink hoodie, standing in front of a bright pink lighted arcade basketball game. " />
            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default ModernRestrooms
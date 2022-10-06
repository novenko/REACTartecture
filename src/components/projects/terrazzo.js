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


const Terrazzo = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Terrazzo Bathroom</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">Sept 1, 2022</p>
              <p class="article-tags">
                <span class="tag">retro</span> <span class="tag">small</span> <span class="tag featured">terrazzo</span>
              </p>
            </div>
            <p>
              The Comeback of Retro Design. From elegant and sophisticated to bright and cheery. A terrazzo treatment dapples the floor and the walls with movement. It's funkiness breaks out the dark green features and visually enlarges the space.
            </p>
            <aside>
              <p>﹀</p>
            </aside>

            <figure>
              <img src="/img/Terrazzo1.jpeg" alt="" />
              <img src="/img/Terrazzo2.jpeg" alt="" />
              <img src="/img/Terrazzo3.jpeg" alt="" />
            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default Terrazzo
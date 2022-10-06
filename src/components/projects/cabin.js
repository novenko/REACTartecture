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


const Cabin = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Cabin</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">Aug 15, 2022</p>
              <p class="article-tags">
                <span class="tag">outback</span> <span class="tag">wild</span> <span class="tag featured">nature</span>
              </p>
            </div>
            <p>
            By designing a linear floor plan and combining it with a sloping ceiling and expansive glazed openings, cabin is a very open space that has the ability to be manipulated in various ways. This particular unit was designed for somebody who is using it as an escape from his daily life in a large city. The scent of the natural wood underlines the perception as a hut and calms pleasant.
            </p>
            <aside>
              <p>﹀</p>
            </aside>

            <figure>
              <img src="/img/Cabin1.jpg" alt="" />
              <img src="/img/Cabin2.jpg" alt="" />
            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default Cabin
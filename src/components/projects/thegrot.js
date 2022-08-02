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


const TheGrot = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">The Grot - Restroom</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">June 21, 2021</p>
              <p class="article-tags">
                <span class="tag">modern</span> <span class="tag">dark</span> <span class="tag featured">bathroom</span>
              </p>
            </div>
            <p>Main concept of the project is to create simple and spare form which fits into overall framework of the public park. The object consist of two seperate forms harmoniously connected by the roofing which breaks into refreshemt zone with water system.The restroom is opened to both sides which increases its accessibility, at the same time keeping toilets entrances discreetly. Exterior fluently harmonise with the interior by the use of same material which is stone and glazing.</p>
            <aside>
            <p>﹀</p>
            </aside>

            <figure>
            <img src="/img/TheGrot2.png" alt=""/>
            <img src="/img/TheGrot1.jpg" alt=""/>
              <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default TheGrot
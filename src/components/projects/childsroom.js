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


const ChildsRoom = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Childs Room</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">June 11, 2022</p>
              <p class="article-tags">
                <span class="tag">jungle</span> <span class="tag">childsroom</span> <span class="tag featured">bedroom</span>
              </p>
            </div>
            <p>This extraordinary room was inspired by all the adventures little one has yet to experience and also inspired by nature, more specifically by the Jungle, which is a true force and brings us peace and serenity.</p>
            <aside>
              <p>﹀</p>
            </aside>

            <figure>
              <img src="/img/ChildRoom1.png" alt="childs bedroom" />
              <img src="/img/ChildRoom2.png" alt="childs bedroom" />
              <img src="/img/ChildRoom4.png" alt="childs bedroom" />
              <img src="/img/ChildRoom5.png" alt="childs bedroom" />            
              <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default ChildsRoom
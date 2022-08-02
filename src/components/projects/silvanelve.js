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


const SilvanElve = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Silvan Elve</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">June 21, 2021</p>
              <p class="article-tags">
                <span class="tag">modern</span> <span class="tag">dark</span> <span class="tag featured">bathroom</span>
              </p>
            </div>
            <p>The project of presented lamp is a result of the work in a seminar course : ‘From screen to being’. The aim of the course was to create a product based on parametric design and digital fabrication. We decided to choose the techinque of printable 3d model.Printable 3d models differ from 3d models developed for visualisations and renderings. Printable objects must consider elements like geometric digital modeling criteria, the specifics of the machine that will read and print the generated code and also the materiality.We were looking for the inspirations in the organic shapes; the idea came from the cut tree trunk. We wanted to obtain a light and clean form, but also give the shape some movement and dynamics.
</p>
            <aside>
            <p>﹀</p>
            </aside>

            <figure>
              <img src="/img/Lamp.jpg" alt=""/>
              <img src="/img/Lamp.png" alt=""/>
            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default SilvanElve
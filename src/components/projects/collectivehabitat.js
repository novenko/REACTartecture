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


const CollectiveHabitat = () => {

return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <h1 class="headline">Collective Habitat</h1>
            <div class="article-meta">
              <p class="byline">by: A.Wawrentowicz</p>
              <p class="dateline">June 21, 2021</p>
              <p class="article-tags">
                <span class="tag">berlin</span> <span class="tag">collective</span> <span class="tag featured">habitat</span>
              </p>
            </div>
            <p>Cities are not stagnant, they modify and adapt with time. We live in times where the dialog has turned into the monologue - people are loosing the feeling of local scale of community. The project is located in Berlin, city with unique and diverse social fabric, famous for its freedom, fights against rising rents. Kreuzberg is located in the centre of Berlin, once being a poor area, mostly populated by immigrants , now is a district known for its diverse cultural life and alternative lifestyles. My aim is to reestablish a living typology, create a collective living experience with a greater urban space and a link to existing structures. I believe that as in the paintings of De Hooch  spaces which bond the domestic interior closely to the public exterior are  by means of courtyards, passages, gates, doors, railings, steps, walls and windows.</p>
            <aside>
            <p>﹀</p>
            </aside>

            <figure>
              <img src="/img/CollectiveHabitat1.jpg" alt="" />
              <img src="/img/CollectiveHabitat1.png" alt="" />
              <img src="/img/CollectiveHabitat2.jpg" alt="" />
              <img src="/img/CollectiveHabitat2.png" alt="" />
              <img src="/img/CollectiveHabitat3.jpg" alt="" />
              <img src="/img/CollectiveHabitat3.png" alt="" />
              <img src="/img/CollectiveHabitat4.png" alt="" />
              <img src="/img/CollectiveHabitat5.png" alt="" />
              <img src="/img/CollectiveHabitat6.png" alt="" />
              <img src="/img/CollectiveHabitat7.png" alt="" />

            <figcaption>Design by aggie.pictures ©</figcaption>
            </figure>
        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default CollectiveHabitat
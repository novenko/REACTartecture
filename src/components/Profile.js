import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";

const MainContainer = styled.div`
background-color: white;
width: 100vw;
height: 100%;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Profile = () => {
    return (
            <MainContainer>
                <LogoComponent theme='light' />
                <div className="main">
                <div className="spread">
                    <div className="spread__left">
                    </div>
                    <div className="spread__right">
                        <div className="title" style={{'paddingTop':'20px'}}>
                            <h1 className="large"><span class="tiny">BUILDING</span> ROCK SOLID <span class="tiny">RELATIONS</span></h1>
                            <h1 className="small">
                            Believing in the detail of every stage.
                            </h1>
                        </div>
                        <div className="content">
                        <div className="fr" lang="fr">
                            
                            <p>
                            To us "state-of-the-art" means innovation in every process, quality and efficiency in every task, expertise and know-how in every step, respect, loyalty and trust for all customers and employees. Always with environmental and social consciousness.
                            </p>
                            
                        </div>
                        <div className="en" lang="en">
                        <p>
                            The expertise, an efficient process and the courage to embrace any challenge with the joy, responsability and determination that defines us.
                            </p>
                            <p>
                            A never-ending search for perfection has led us to a stage of maturity that makes us see with clarity solutions where others still see problems.
                            </p>
                        </div>
                        </div>
                        <div className="spread__page-bottom">
                        <i className="fas fa-bicycle fa-4x"></i>
                        <p>aggie.pictures@pm.me</p>
                        <div className="num">✤</div>
                        </div>
                    </div>
                    </div>
                </div>
            </MainContainer>
    )
}

export default Profile
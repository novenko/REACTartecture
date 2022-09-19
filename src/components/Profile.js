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
                        <div className="profile_poster">
                            <img src="/img/me.jpg" height="100%" alt="" />
                        </div>
                    </div>
                    <div className="spread__right">
                        <div className="title" style={{'paddingTop':'25px'}}>
                            <h1 className="large">AGGIE</h1>
                            
                        </div>
                        <div className="title" style={{'paddingTop':'2px'}}>
                            <h3 className="small">
                            DIRECTOR, M. ARCH
                            </h3>
                        </div>
                        <div>
                            <p>
                            Aggie is an expert on providing architectural and design services : technical drawings, conceptual drawings, 3d modelling, illustrations and high quality visualizations. 
                            </p>
                            <p>
                            Aggie worked in the architecture industry in Canada, Poland and Sweden. Aggie received a Masters of Architecture from the KTH Royal Institute of Technology in Stockholm, Sweden.
                            </p>
                            <p>
                            Aggie believes in the detail of every stage, always with environmental and social consciousness.
                            </p>
                        </div>
                        <div className="spread__page-bottom">
                        <i className="fas fa-bicycle fa-4x"></i>
                        <p>aggie.pictures@pm.me</p>
                        </div>
                    </div>
                    </div>
                </div>
            </MainContainer>
    )
}

export default Profile
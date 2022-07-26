import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import ArchitectureCard from "./ArchitectureCard";
import { Posts } from '../data/ArchitectureData'

const ArtecturePage = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 110vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 1rem;
`
const Artecture = () => {
    return (
            <ArtecturePage>
                <LogoComponent theme='light' />
                <div className="main">
                    <Center>
                        <div className="grid">
                            {
                                Posts.map(blog => {
                                    return <ArchitectureCard key={blog.id} blog={blog} />
                                })
                            }
                        </div>
                    </Center>
                </div>
            </ArtecturePage>
    )
}

export default Artecture
import styled from "styled-components"
import ai from "./img/ai.png"
import home from "./img/home.png"
import search from "./img/search.png"
import talk from "./img/talk.png"
import { Link } from "react-router-dom"

const Footer = () => {

    const Foot = styled.footer`
        position: fixed;
        bottom: 0;
        background-color: white;
        width: 100%;
        height: 10vh;
        border : 1px solid black;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    `
    const ContentBox = styled.div`
        box-shadow: 0px -5px -5px 6px #555555;
        height: 100%;
        display: flex;
        justify-content: center;
        gap: 50px;
        align-content: center;
    `
    const Box = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
        }

        > a > img {
            width: 35px;
            height: 35px;
        }
        > a > p {
            text-align: center;
            color: #00DC82;
        }
    `

    return( 
        <>
            <Foot>
                <ContentBox>
                    <Box><Link to="/"><img src={home} alt="#" /><p>홈</p></Link></Box>
                    <Box><Link to="/search"><img src={search} alt="#" /><p>검색</p></Link></Box>
                    <Box><Link to="/search"><img src={ai} alt="#" /><p>ai챗봇</p></Link></Box>
                    <Box><Link to="/search"><img src={talk} alt="#" /><p>커뮤니티</p></Link></Box>
                </ContentBox>
            </Foot>
        </>
    )
}

export default Footer
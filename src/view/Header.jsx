import styled from "styled-components";
import logo from "./img/Group 2.png"


const Header = () => {
    
    const Head = styled.header`
        background-color: #00DC82;
        z-index: 2;
        top: 0;
        position: fixed;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        /* flex-basis: content; */
        width: 100%;
        height: 8vh;
        /* background-color: #00DC82; */
        > img {
            margin-left: 5%;
            width: 45%;
            height: 80%;
        }
    `

    return(
        <>
            <Head>
                <img src={logo} alt="#" />
            </Head>
        </>
    )
}

export default Header;
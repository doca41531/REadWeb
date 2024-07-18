import styled from "styled-components"
import Footer from "./Footer"
import aiimg from "./img/aiimg.png"
import Exbook1 from "./img/ExBook1.png"
import Community from "./img/Community.png"
import Profile from "./img/Profile.png"
import Exbook2 from "./img/ExBook2.png"
import Exbook3 from "./img/ExBook3.png"
import AfterLine from "./img/afterLine.png"
import Header from "./Header"

const Home = () => {

    const Body = styled.div`
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px black solid;
    margin: 0px;
    /* width: 430px;
    height: 932px; */
    height: 100vh;
  `
    const Main = styled.div`
        width: 100%;
        height: 100%;
    `
    const Section1 = styled.section`
        margin-top: 8vh;
        background-color: #00DC82;
        width: 100%;
        height: 35%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            transform: scale(1.2);
        }

        > div:nth-child(1) {
            position: relative;
            left: 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        p {
            font-size: 20px;
            color: white;
        }

        button {
            background-color: #2C2C2C;
            color: white;
            width: 43%;
            height: 50px;
            border-radius: 30px;
            font-size: 20px;
        }
    `
    const Section2 = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: end;
        width: 100%;
        height: 30%;

        > div:nth-child(2){
            display: flex;
            justify-content: space-between;
        }
        > div > div:nth-child(2) > img {
            /* transform: scale(1.2); */
            width: 95%;
        }
        > div > div:nth-child(1) > img {
            /* transform: scale(1.2); */
            width: 88%;
        }
        > div > div:nth-child(3) > img {
            /* transform: scale(1.2); */
            width: 88%;
        }
        > div > div > div > p:nth-child(2) {
            white-space: nowrap;
            width: 120px;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        > div > div p {
            text-align: center;
        }

        > div > div {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: end;
            align-items: center;
            height: 100%;
            width: 95%;
        }
    `
    const Section3 = styled.section`
        padding-bottom: 10vh;
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin-top: 5%;
        margin-bottom: 10vh;

        > div > div > div > div{
            display: flex;
            flex-direction: column;
            margin-left: 5%;
            width: 89%;
            border-bottom: 1px solid #cac8c8;
            padding-bottom: 3%;
            margin-top: 5%;
        }

        > div > div > div > div > div{
            display: flex;
            justify-content: space-between;
        }

        > div > div > div > div > div > div {
            display: flex;
        }

        > div > div > div > div > div > div > img {
            width: 20px;
            height: 20px;
        }

        > div > div > div > div > div > div > p {
            padding-bottom: 5%;
        }  
        
        > div > div:has(button) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        button {
            margin-top: 3vh;
            margin-bottom : 4vh;
            background-color: transparent;
            color: #00DC82;
            border: 1px solid #00DC82;
            border-radius: 15px;
            width: 80px;
            height: 30px;
        }
    `
    const Title = styled.p`
        margin-left: 5%;
        font-size: 22px;
        font-weight: bold;

        &:after { 
            content: url(${AfterLine});
            margin-left: 1%;
        }
    `
    return(
        <>
            <Body>
                <Header></Header>

                    <Main>
                        <Section1>
                            <div>
                                <p>AI와 커뮤니티로 나에게<br/>필요한 도서를 찾아보세요!</p>
                                <button>시작하기</button>
                            </div>
                            <div>
                                <img src={aiimg} alt="#" />
                            </div>
                        </Section1>
                        <Section2>
                            <div>
                                <Title>최고의 도서</Title>
                            </div>
                            <div>
                                <div>
                                    <img src={Exbook2} alt="#" />
                                    <div>
                                        <p>TOP2</p>
                                        <p>토비의 스프링 3.1. 1: 스프링의 이해와 원리</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Exbook1} alt="#" />
                                    <div>
                                        <p>TOP1</p>
                                        <p>스프링 부트</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Exbook3} alt="#" />
                                    <div>
                                        <p>TOP3</p>
                                        <p>코드로 배우는 스프링 웹 프로젝트</p>
                                    </div>
                                </div>
                            </div>
                        </Section2>
                        <Section3>
                            <div>
                                <Title>최신 게시물</Title>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <img src={Profile} alt="" />
                                                    <p>홍길동</p>
                                                </div>
                                                <div>
                                                    <img src={Community} alt="" />
                                                    <p>0</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>스프링 공부 하려는데 어떤 책으로 하는게 좋을까요?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <img src={Profile} alt="" />
                                                    <p>홍길동</p>
                                                </div>
                                                <div>
                                                    <img src={Community} alt="" />
                                                    <p>0</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>스프링 공부 하려는데 어떤 책으로 하는게 좋을까요?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <img src={Profile} alt="" />
                                                    <p>홍길동</p>
                                                </div>
                                                <div>
                                                    <img src={Community} alt="" />
                                                    <p>0</p>
                                                </div>
                                            </div>
                                            <div>
                                                <p>스프링 공부 하려는데 어떤 책으로 하는게 좋을까요?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button>더보기</button>
                                </div>
                            </div>
                        </Section3>
                    </Main>

                <Footer></Footer>
            </Body>
        </>
    )

}

export default Home
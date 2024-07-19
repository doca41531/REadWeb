import styled from "styled-components";
import SearchBtn from "./img/SearchBtn.png"
import Footer from "./Footer";
import Header from "./Header";

const Search = () => {

  const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0px;
    width: 430px;
    height: 932px;
  `;

  const Main = styled.div`
    padding-top: 8vh;
    padding-bottom: 8vh;
    > form {
      background-color: #00DC82;
      height: 13vh;
      display: flex;
      justify-content: center;
      align-items: center;
      > input {
        width: 85%;
        height: 6vh;
      }
      > input::placeholder{
        font-size: 20px;
      }
      > button {
        border: none;
        border-radius: 10px;
        background-color: #00DC82;
        position: absolute;
        right: 8%;
        height: 5vh;
        width: 13%;
        margin-right: 2%;
      }
    }
  `;

  const Main2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div {
      display: flex;
      width: 90%;
      >div:nth-child(2){
        margin-left: 10px;
      }
      > div:nth-child(2) > div > p{
        color: #a09f9f;
        font-size: 15px;
      }
      > div {
        padding-bottom: 20px;
        border-bottom: 1px solid #b5b5b5;
        margin-top: 20px;
      }
    }
    img {
      width: 115px;
      border-radius: 20px;
    }
  `;

  const sendDataToServer = async (e) => {
    e.preventDefault();

    const formData = {
      bookname: '자바', // 예시 한글 데이터
    };
    try {
      const response = await fetch('http://127.0.0.1:5000/find', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data from server:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const BookImgurl = ["https://bookthumb-phinf.pstatic.net/cover/002/044/00204480.jpg", "https://bookthumb-phinf.pstatic.net/cover/046/955/04695566.jpg", "https://bookthumb-phinf.pstatic.net/cover/000/987/00098706.jpg", "	https://image.aladin.co.kr/product/1249/94/cover500/8994914307_2.jpg", "https://image.aladin.co.kr/product/170/72/cover500/8980811586_1.jpg", "https://bookthumb-phinf.pstatic.net/cover/167/105/16710547.jpg", "https://image.aladin.co.kr/product/13828/73/cover500/k782532222_1.jpg", "https://image.aladin.co.kr/product/19581/33/cover/k352635320_1.jpg", "	https://read365.edunet.net/img/no_book.805feab5.png", "	https://image.aladin.co.kr/product/28299/82/cover500/k062835698_1.jpg"]
  const BookTitle = ["HTML + 자바 스크립트 30일 완성", "모바일 자바 게임 프로그래밍", "(예제로 따라하는!)자바스크립트", "자바 전문가 임동혁의 Java를 게임으로 정복하기", "(게임하듯이 게임을 만들며 배우는)자바프로그래밍 1", "모던 자바스크립트 deep dive", "모던 자바스크립트 입문", "자바와 JUnit을 활용한 실용주의 단위 테스트", "어려워진 자바, 실무에 자신 있게 적용하기", "Must Have 성낙현의 JSP 자바 웹 프로그래밍"]
  const BookText = {
    add : ["신문섭 저", "반성준 지음", "감영환 [저]", "임동혁", "원일용", "이웅모", "이소 히로시 지음 서재원 옮김", "제프 랭어;앤드 헌트;데이브 토마스", "장윤기", "상낙현"],
    cnf : ["영진.com", "한빛미디어", "삼양", "북스홀릭", "현우사", "위키북스", "길벗", "인사이트", "골든래빗"],
    year : ["2001", "2008", "2002", "2011", "2008", "2020", "2018", "2019", "2021", "2021"]
  }
  return (
    <>
      <Body>
        <Header />
        <Main>
          <form action="#" onSubmit={sendDataToServer}>
            <input type="text" className="bookname" name="bookname" placeholder="검색" />
            <button type="submit"><img src={SearchBtn} alt="#" /></button>
          </form>
          <Main2>
                  <div>
                    <div>
                      <img src={BookImgurl[0]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[0]}</p>
                      <div>
                        <p>저자 : {BookText.add[0]}</p>
                        <p>출판사 : {BookText.cnf[0]}</p>
                        <p>출판년도 : {BookText.year[0]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[1]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[1]}</p>
                      <div>
                        <p>저자 : {BookText.add[1]}</p>
                        <p>출판사 : {BookText.cnf[1]}</p>
                        <p>출판년도 : {BookText.year[1]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[2]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[2]}</p>
                      <div>
                        <p>저자 : {BookText.add[2]}</p>
                        <p>출판사 : {BookText.cnf[2]}</p>
                        <p>출판년도 : {BookText.year[2]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[3]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[3]}</p>
                      <div>
                        <p>저자 : {BookText.add[3]}</p>
                        <p>출판사 : {BookText.cnf[3]}</p>
                        <p>출판년도 : {BookText.year[3]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[4]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[4]}</p>
                      <div>
                        <p>저자 : {BookText.add[4]}</p>
                        <p>출판사 : {BookText.cnf[4]}</p>
                        <p>출판년도 : {BookText.year[4]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[5]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[5]}</p>
                      <div>
                        <p>저자 : {BookText.add[5]}</p>
                        <p>출판사 : {BookText.cnf[5]}</p>
                        <p>출판년도 : {BookText.year[5]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[6]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[6]}</p>
                      <div>
                        <p>저자 : {BookText.add[6]}</p>
                        <p>출판사 : {BookText.cnf[6]}</p>
                        <p>출판년도 : {BookText.year[6]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[7]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[7]}</p>
                      <div>
                        <p>저자 : {BookText.add[7]}</p>
                        <p>출판사 : {BookText.cnf[7]}</p>
                        <p>출판년도 : {BookText.year[7]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[8]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[8]}</p>
                      <div>
                        <p>저자 : {BookText.add[8]}</p>
                        <p>출판사 : {BookText.cnf[8]}</p>
                        <p>출판년도 : {BookText.year[8]}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={BookImgurl[9]} alt="#" />
                    </div>
                    <div>
                      <p>{BookTitle[9]}</p>
                      <div>
                        <p>저자 : {BookText.add[9]}</p>
                        <p>출판사 : {BookText.cnf[9]}</p>
                        <p>출판년도 : {BookText.year[9]}</p>
                      </div>
                    </div>
                  </div>
          </Main2>
        </Main>
        <Footer />
      </Body>
    </>
  );
}

export default Search;

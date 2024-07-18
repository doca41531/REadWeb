import styled from "styled-components";
import SearchBtn from "./img/SearchBtn.png";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

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
      background-color: #00dc82;
      height: 13vh;
      display: flex;
      justify-content: center;
      align-items: center;
      > input {
        width: 85%;
        height: 6vh;
      }
      > input::placeholder {
        font-size: 20px;
      }
      > button {
        border: none;
        border-radius: 10px;
        background-color: #00dc82;
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

      > div:nth-child(2) {
        margin-left: 10px;
      }

      > div:nth-child(2) > div > p {
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

  const [Dataarr, setData] = useState(null);
  const [reload, setReload] = useState(0);

  const sendDataToServer = async (e) => {
    e.preventDefault();

    const formData = {
      bookname: document.querySelector(".bookname").value // 예시 한글 데이터
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
      setData(data);
      setReload(reload + 1);
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            {Dataarr ? (
              Dataarr.data.map((item, idx) => {
                return (
                  <div key={idx}>
                    <div>
                      <img src={item.BookImgurl} alt="#" />
                    </div>
                    <div>
                      <p>{item.BookTitle}</p>
                      <div>
                        <p>저자 : {item.BookText[0]}</p>
                        <p>출판사 : {item.BookText[1]}</p>
                        <p>출판년도 : {item.BookText[2]}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>데이터가 없습니다.</p>
            )}
          </Main2>
        </Main>
        <Footer />
      </Body>
    </>
  );
};

export default Search;

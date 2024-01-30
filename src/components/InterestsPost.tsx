import React, {useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import bubbleimg  from '../assets/images/bubble.png';

const GlobalStyle = createGlobalStyle`
* {
  font-family: "Pretendard";
  margin: 0;
  padding: 0;
}
body {
    background-color: #fff;
  }
 
`

const PostContainer = styled.nav`
background-color: #ffffff;
display: flex;
margin-left: 15%;
margin-right: 15%;
`

const SideNavbar = styled.div`
background-color: #ffffff;
  height: 190px;
  width: 200px;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`


const SideClick = styled.button`  //버튼클릭시 파란색 border 지우기 
color: #000;
font-weight: normal;
margin-left: 10px;
padding: 5%;
border-bottom: 1px solid #e8e8e8;
text-align: start;
&:hover,
  &:active {
    font-weight: bold;
    color: #650fa9;
    background-color: rgba(220, 196, 239, 0.4); /* #dcc4ef의 60% 투명한 버전 */
    border-radius: 5px;
  }
`
const SideinterestsClick = styled.button` 
color: #650fa9;
font-weight: bold;
margin-left: 10px;
padding: 5%;
border-bottom: 1px solid #e8e8e8;
text-align: start;
&:hover,
  &:active {
    font-weight: bold;
    color: #650fa9;
    background-color: rgba(220, 196, 239, 0.4); /* #dcc4ef의 60% 투명한 버전 */
    border-radius: 5px;
  }
`

const Section = styled.div`
margin-left: 5%;
margin-top: 5%;
`

const SectionHeader = styled.div`
width: 700px;
height: 35px;
display: flex;
align-items: center;
padding-bottom: 5%;
padding-top: 5%;
border-bottom: 1px solid #e8e8e8;
`

const Input = styled.input`
  text-indent: 20px;
  width: 400px;
  height: 40px;
  background-color: white;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-weight: normal;
`

const WriteButton = styled.button`
color: black;
  width: 70px;
  height: 40px;
  border-radius: 3px;
  border: 0.5px solid #bdbdbd;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30%;
  &:hover,
  &:active {
    color: black;
    border-radius: 5px;
  }
`


const PostGroup = styled.div`
display: flex;
flex-direction: column;
`

const PostInfo = styled.a`
color: #000;
padding: 15px;
border-bottom: 1px solid #e8e8e8;
&:hover,
  &:active {
    color: #000;
  }
`

const PostTitle = styled.h3`
font-size: 18px;
font-weight: bold;
`

const PostBody = styled.p`
font-size: 15px;
font-weight: normal;
margin-top: 5px;
`

const PostInfoFooter = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10px;
font-size: 12px;
font-weight: lighter;
`

const PostInfoDetail = styled.div`
display: flex;
`

const InfoDetail = styled.span`
margin-right: 5%;
`
const PostData = styled.div`
display: flex;
align-items: center;

`
const CommentImg = styled.img`
margin-right: 5px;
width: 15px;
height: 15px;
`
const Comment = styled.span`
font-weight: bold;
`
const Like = styled.img`
margin-right: 15px;
width: 11px;
height: 11px;
`
const InterestsGroup = styled.div`
border-bottom: 1px solid #bdbdbd;
display: flex;
`

const OptionButton = styled.button`
color: #bdbdbd;
  width: 70px;
  height: 45px;
  background: #fff;
  font-weight: bold;
  font-size: 1 rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:active {
 
    color: #868e96;

  }
`


export default function MainPost() {
    const [like, setLike] = useState("src/assets/images/unlikeicon.png")
    const [isClicked, setIsClicked] = useState(false);
  
    const HandleClick = () => {
      if(isClicked){
        setLike("src/assets/images/unlikeicon.png");
        setIsClicked(false);
      }else{
        setLike("src/assets/images/likeicon.png");
        setIsClicked(true);
      }
    }

    //리팩토핑할 때 ul&li&a로 변경
    return (
        <>
        <GlobalStyle/>
        <PostContainer>  
            <SideNavbar>
              <SideClick as="a" href="/post">최근 게시글</SideClick>
              <SideClick as="a" href="/bestpost">인기 게시글</SideClick>
              <SideClick as="a" href="/mypost">내가 쓴 게시글</SideClick>
              <SideinterestsClick as="a" href="/interestspost">분야 별 게시글</SideinterestsClick>
            </SideNavbar>
            <Section>
                <InterestsGroup>
                    <OptionButton as="a" href="/interestspost/math">수학</OptionButton>
                    <OptionButton as="a" href="/interestspost/korean">국어</OptionButton>
                    <OptionButton as="a" href="/interestspost/english">영어</OptionButton>
                    <OptionButton as="a" href="/interestspost/science">과학</OptionButton>
                    <OptionButton as="a" href="/interestspost/programming">코딩</OptionButton>
                </InterestsGroup>
                <SectionHeader>
                    <Input type="text" placeholder="검색 내용을 입력하세요" />
                    <WriteButton as="a" href='/writing' > 글쓰기</WriteButton>
                </SectionHeader>
                <PostGroup>
                    <PostInfo href="/">
                        <PostTitle>제목</PostTitle>
                        <PostBody>상세 게시글 내용</PostBody>
                        <PostInfoFooter>
                            <PostInfoDetail>
                                <InfoDetail>heesu52@naver.com</InfoDetail>
                                <InfoDetail>12/25</InfoDetail>
                                <InfoDetail>23:00</InfoDetail>
                            </PostInfoDetail>
                            <PostData>
                                <Like src={like} onClick={HandleClick}/>
                                <CommentImg src={bubbleimg}/>
                                <Comment>3</Comment>
                            </PostData>
                        </PostInfoFooter>
                    </PostInfo>
                </PostGroup>
            </Section> 
        </PostContainer> 
      </>
    )
  } 
   
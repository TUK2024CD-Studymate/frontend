import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 500px;
  border-right: 1px solid #d8d8d8;
  display: flex;
  flex-direction: column;
`

const Post = styled(Link)`
  width: 240px;
  font-size: 25px;
  display: flex;
  margin-top: 50px;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 20px 0px 20px 40px;
  border-radius: 20px;
`
const Questions = styled(Link)`
  width: 240px;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 20px 0px 20px 40px;
  border-radius: 20px;
`

const Study = styled(Link)`
  width: 240px;
  font-size: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 20px 0px 20px 40px;
  border-radius: 20px;
`

export default function PostBar() {
  const location = useLocation()

  return (
    <Container>
      <Post
        to="/post"
        style={{
          backgroundColor: location.pathname === '/post' ? '#E8DCF2' : 'inherit',
          color: location.pathname === '/post' ? '#650FA9' : 'inherit',
          fontWeight: location.pathname === '/post' ? 'bold' : 'inherit',
        }}>
        자유 게시판
      </Post>
      <Questions
        to="/post/questions"
        style={{
          backgroundColor: location.pathname === '/post/questions' ? '#E8DCF2' : 'inherit',
          color: location.pathname === '/post/questions' ? '#650FA9' : 'inherit',
          fontWeight: location.pathname === '/post/questions' ? 'bold' : 'inherit',
        }}>
        질문 게시판
      </Questions>
      <Study
        to="/post/study"
        style={{
          backgroundColor: location.pathname === '/post/study' ? '#E8DCF2' : 'inherit',
          color: location.pathname === '/post/study' ? '#650FA9' : 'inherit',
          fontWeight: location.pathname === '/post/study' ? 'bold' : 'inherit',
        }}>
        스터디 게시판
      </Study>
    </Container>
  )
}

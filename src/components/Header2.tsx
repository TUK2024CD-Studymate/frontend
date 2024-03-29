import styled from 'styled-components'
import LogoImg from '../assets/images/StudyMate.svg'
import ProfileImg from '../assets/images/profile.png'
import axios from 'axios'
import { useApiUrlStore } from '../store/store'
import { useEffect, useState } from 'react'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 109px;
  padding-left: 140px;
  padding-right: 140px;
`

const Logo = styled.img`
  width: 236px;
`

const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Profile = styled.img`
  width: 100px;
`

const NickName = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 10px;
`

const Sir = styled.div`
  font-size: 20px;
  margin: 5px;
`

const SignOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #dcdcdc;
  width: 120px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  margin: 30px;
  cursor: pointer;
`

export default function Header2() {
  const { apiUrl } = useApiUrlStore()
  const [nickname, setNickname] = useState<string>('')

  const getNickname = async () => {
    try {
      const access = localStorage.getItem('accessToken')
      if (!access) {
        console.error('Access token not found in localStorage')
        return
      }
      const response = await axios.get(`${apiUrl}/user`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      setNickname(response.data.nickname)
    } catch (error) {
      console.error('Error fetching nickname:', error)
    }
  }

  useEffect(() => {
    getNickname()
  }, [])

  return (
    <Container>
      <Logo src={LogoImg} />
      <RightWrapper>
        <Profile src={ProfileImg} />
        <NickName>{nickname}</NickName>
        <Sir>님</Sir>
        <SignOut>로그아웃</SignOut>
      </RightWrapper>
    </Container>
  )
}

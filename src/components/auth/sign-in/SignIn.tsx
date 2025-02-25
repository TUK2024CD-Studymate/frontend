import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApiUrlStore } from "store/store";
import {
  Container,
  LoginWrapper,
  LoginH2,
  LoginInput,
  LoginButton,
  FindMore,
  FindIt
} from "components/auth/sign-in/SignIn.styles.ts";

export default function Login() {
  const { apiUrl } = useApiUrlStore()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const onLoginHandler = async (e: React.FormEvent) => {
    e.preventDefault()

    if (email === '' || password === '') {
      alert('이메일 또는 비밀번호를 확인해주세요.')
      return
    }

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      })

      const access = response.data.accessToken
      const refresh = response.data.refreshToken

      localStorage.setItem('accessToken', access)
      localStorage.setItem('refreshToken', refresh)
      alert('로그인 되었습니다.')
      navigate('/mypage/profile')
    } catch (error) {
      alert('로그인에 실패했습니다.')
    }
  }

  return (
    <Container>
      <form onSubmit={onLoginHandler}>
        <LoginWrapper>
          <LoginH2>Login to StudyMate</LoginH2>
          <LoginInput type="text" placeholder="이메일" value={email} onChange={onEmailHandler} />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
          />
          <LoginButton>로그인</LoginButton>
          <FindMore>
            <FindIt href="/signUp">계정이 없으신가요? 회원가입</FindIt>
          </FindMore>
        </LoginWrapper>
      </form>
    </Container>
  )
}

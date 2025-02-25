import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43.75rem;
  height: 40rem;
  padding: 2.5rem;
  border-radius: 1.25rem;
  border: 1px solid var(--Gray-03, #bdbdbd);
  margin-bottom: 7rem;
`

export const LoginH2 = styled.h2`
  width: 75%;
  height: 10%;
  color: #650fa9;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
`

export const LoginInput = styled.input`
  text-indent: 1.25rem;
  width: 85%;
  height: 12%;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-radius: 0.625rem;
  margin: 0.625rem;
  font-size: 1.25rem;
`

export const LoginButton = styled.button`
  width: 85%;
  height: 12%;
  border-radius: 0.625rem;
  border: 1px solid var(--Gray-03, #bdbdbd);
  background: var(--bdbdbd, #650fa9);
  color: var(--White, #fff);
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0.625rem;
  &:active {
    background: #490e76;
  }
  margin-top: 5rem;
`

export const FindMore = styled.p`
  width: 100%;
  height: 1rem;
  margin-top: 0.625rem;
  text-align: center;
`

export const FindIt = styled.a`
  font-size: 1.25rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #bdbdbd;
  text-decoration: none;
  &:hover,
  &:active {
    color: #650fa9;
  }
`
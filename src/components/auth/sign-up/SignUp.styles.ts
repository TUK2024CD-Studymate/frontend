import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43.75rem;
  height: 53rem;
  padding: 2rem;
  border-radius: 1.25rem;
  border: 1px solid var(--Gray-03, #bdbdbd);
`

export const SignUpH2 = styled.h2`
  width: 80%;
  height: 10%;
  color: #650fa9;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 1.25rem;
`

export const InputWrap = styled.div`
  display: flex;
`

export const SignUpInput = styled.input`
  text-indent: 1.25rem;
  width: 18.75rem;
  height: 3.75rem;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-radius: 0.625rem;
  margin: 0.625rem;
  font-size: 1.25rem;
`

export const SignUpInput2 = styled.input`
  text-indent: 1.25rem;
  width: 8.75rem;
  height: 3.75rem;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-radius: 0.625rem;
  margin: 0.625rem;
  font-size: 1.25rem;
`

export const PhoneWrap = styled.div`
  display: flex;
  width: 18.75rem;
  height: 3.75rem;
  box-sizing: border-box;
  margin: 0.625rem;
`

export const SendNumBtn = styled.button`
  height: 3.75rem;
  border: none;
  border-radius: 0.625rem;
  background-color: #650fa9;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem;
  cursor: pointer;
`

export const PhoneInput = styled.input`
  text-indent: 1.25rem;
  width: 15.625rem;
  height: 3.75rem;
  box-sizing: border-box;
  background-color: #f8f8f8;
  border-radius: 0.625rem;
  font-size: 1.25rem;
  margin-right: 1.25rem;
`

export const VerifyBtn = styled.button`
  height: 3.75rem;
  border: none;
  border-radius: 0.625rem;
  background-color: #650fa9;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem;
  cursor: pointer;
`

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
`

export const RoleSelect = styled.select`
  width: 9rem;
  height: 2.5rem;
  border: 1px #bdbdbd solid;
  border-radius: 0.625rem;
  font-size: 1rem;
  text-align: center;
  margin: 0.625rem;
`
export const InterestsSelect = styled.select`
  width: 12.5rem;
  height: 2.5rem;
  border: 1px #bdbdbd solid;
  border-radius: 0.625rem;
  font-size: 1rem;
  text-align: center;
  margin: 0.625rem;
`

export const SignUpSubmit = styled.button`
  width: 37.5rem;
  height: 4.3rem;
  border-radius: 0.625rem;
  border: 1px solid var(--Gray-03, #bdbdbd);
  background: var(--bdbdbd, #650fa9);
  color: var(--White, #fff);
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin: 3rem;
  &:active {
    background: #490e76;
  }
`
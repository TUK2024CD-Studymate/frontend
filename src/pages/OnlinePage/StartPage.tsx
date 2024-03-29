import { useState, ChangeEvent } from 'react'
import styled from 'styled-components'
import Header2 from '../../components/Header2'
import Navbar2 from '../../components/Navbar2'
// import SelectUserModal from '../../components/SelectUserModal'
// import ConfirmMatchingModal from '../../components/ConfirmMatchingModal'
// import FindLoadingModal from '../../components/FindLoadingModal'
// import MatchingLoadingModal from '../../components/MatchingLoadingModal'
import axios from 'axios'
import { useApiUrlStore } from '../../store/store'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StartWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 70%;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
`

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 80px;
`

const SelectInterest = styled.select`
  border: solid 1px black;
  width: 400px;
  height: 70px;
  font-size: 28px;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
`
const InputTitle = styled.input`
  margin: 20px;
  border: solid 1px black;
  width: 600px;
  height: 70px;
  border-radius: 10px;
  padding: 10px;
  font-size: 28px;
  ::placeholder {
    color: BDBDBD; /* placeholder 텍스트 색상 설정 */
    font-style: italic; /* placeholder 텍스트 스타일 설정 */
  }
`

const InputContent = styled.input`
  margin: 10px;
  border: solid 1px black;
  width: 600px;
  height: 200px;
  border-radius: 10px;
  padding: 10px;
  font-size: 28px;
  ::placeholder {
    color: BDBDBD; /* placeholder 텍스트 색상 설정 */
    font-style: italic; /* placeholder 텍스트 스타일 설정 */
  }
`
const StartMatchingBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 32px;
  font-weight: bold;
  width: 320px;
  height: 80px;
  background-color: #e8dcf2;
  color: #650fa9;
  margin: 120px;
`

interface Option {
  label: string
}

function StartPage() {
  const { apiUrl } = useApiUrlStore()

  const navigate = useNavigate()

  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [options] = useState<Option[]>([
    {
      label: 'PROGRAMMING',
    },
    {
      label: 'MATH',
    },
    {
      label: 'ENGLISH',
    },
    {
      label: 'ComputerSience',
    },
    {
      label: 'Algorithm',
    },
  ])

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const handleSubmit = async () => {
    const access = localStorage.getItem('accessToken')
    if (access) {
      try {
        const response = await axios.post(
          `${apiUrl}/question`,
          {
            title: title,
            content: content,
            interests: selectedOption,
          },
          {
            headers: { Authorization: `Bearer ${access}` },
          },
        )
        alert('Question created')
        navigate('/online/select', { state: response.data.id })
      } catch (error) {
        console.error('Error creating question:', error)
      }
    } else {
      console.error('Access token not found.')
    }
  }

  return (
    <div>
      <Header2 />
      <Navbar2 />
      <Container>
        <StartWrap>
          <Title>온라인 매칭을 시작해볼게요</Title>
          <SelectInterest value={selectedOption} onChange={handleOptionChange}>
            <option value="">관심분야를 선택하세요</option>
            {options.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </SelectInterest>
          <InputTitle placeholder="제목을 적어주세요" onChange={handleTitleChange}></InputTitle>
          <InputContent
            placeholder="내용을 적어주세요"
            onChange={handleContentChange}></InputContent>
          <StartMatchingBtn onClick={handleSubmit}>온라인 매칭 시작하기</StartMatchingBtn>
        </StartWrap>
        {/* <SelectUserModal /> */}
        {/* <ConfirmMatchingModal /> */}
        {/* <FindLoadingModal /> */}
        {/* <MatchingLoadingModal /> */}
      </Container>
    </div>
  )
}

export default StartPage

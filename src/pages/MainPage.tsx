import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import MainFirst from '../components/onboarding/MainFirst';
import MainFooter from '../components/onboarding/MainFooter';
import MainFourth from '../components/onboarding/MainFourth';
import MainHeader from '../components/onboarding/MainHeader';
import MainSecond from '../components/onboarding/MainSecond';
import MainThird from '../components/onboarding/MainThird';
import StartNav from '../components/onboarding/StartNav';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

function MainPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken');

  const handleStart = () => {
    if (token) {
      navigate('/mypage/profile');
    } else {
      navigate('/login');
    }
  };

  const headerComponent = token ? <Header /> : <MainHeader />;

  return (
    <div>
      {headerComponent}
      <Container>
        <MainFirst />
        <MainSecond />
        <MainThird />
        <MainFourth />
        <MainFooter />
        <StartNav handleStart={handleStart} />
      </Container>
    </div>
  );
}

export default MainPage;

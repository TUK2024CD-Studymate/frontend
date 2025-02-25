import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 68.75rem;
  height: 13rem;
  border: 1px solid #d8d8d8;
  border-radius: 1rem;
  &:hover {
    border: 1px solid #650fa9;
  }
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1.25rem;
`;

export const MainWrap = styled.div`
  display: flex;
  width: 65.6rem;
`;

export const ImgWrap = styled.div`
  display: flex;
  width: 8.125rem;
  height: 8.125rem;
  justify-content: center;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.25rem;
  height: 7.5rem;
  margin-left: 1.25rem;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 56.25rem;
  height: 3.75rem;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.span`
  font-weight: bold;
  font-size: 2.3rem;
`;

export const NickName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0.625rem;
`;

export const Bottom = styled.div`
  display: flex;
  width: 57.5rem;
  height: 3.75rem;
  align-items: center;
`;

export const Interest = styled.div`
  display: flex;
  color: #9b9b9b;
  font-size: 1.6rem;
`;

export const Detail = styled.div`
  display: flex;
  color: #9b9b9b;
  font-size: 1.6rem;
`;

export const StatusWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Status = styled.div`
  display: flex;
  color: #9b9b9b;
  font-weight: bold;
  font-size: 1.8rem;
  margin-left: 0.625rem;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 65.6rem;
`;

export const MessageCount = styled.div<{ count: number }>`
  display: ${(props) => (props.count > 0 ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 3.25rem;
  height: 2.3rem;
  border-radius: 1.8rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const NoChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18.75rem;
`;

export const Text = styled.div`
  display: flex;
  font-size: 1.6rem;
  color: #9b9b9b;
`;
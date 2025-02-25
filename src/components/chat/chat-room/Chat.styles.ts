import styled from 'styled-components';

import {
  MessagesProps,
  ProfileProps,
  MessageContainerProps,
} from './Chat.type';

export const Container = styled.div`
  width: 95.6rem;
  height: calc(100vh - 17.5rem);
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  border-left: 2px solid #d8d8d8;
  border-right: 2px solid #d8d8d8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ChatWrap = styled.div`
  width: 95.6rem;
  height: calc(100vh - 12.5rem);
  overflow-y: auto; /* 내용이 넘칠 때만 스크롤 표시 */
`;

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.sender === props.nickname ? 'flex-end' : 'flex-start'};
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

// const Time = styled.span`
//   font-size: 12px;
//   color: #888; /* Gray color for time */
// `

export const Profile = styled.img<ProfileProps>`
  padding: 0.8rem;
  width: 6.25rem;
  height: 6.25rem;
  margin-left: ${(props) =>
    props.sender !== props.nickname ? '0' : '0.625rem'};
  margin-right: ${(props) =>
    props.sender !== props.nickname ? '0.625rem' : '0'};
`;

export const Messages = styled.div<MessagesProps>`
  display: flex;
  max-width: 40%;
  padding: 1.25rem;
  margin-right: 0.625rem;
  height: auto;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.sender !== props.nickname ? 'rgba(231, 227, 227, 0.8)' : '#8a33cb'};
  color: ${(props) => (props.sender !== props.nickname ? 'black' : 'white')};
  border-radius: 1rem;
  font-size: 1.6rem;
  margin-left: ${(props) =>
    props.sender !== props.nickname ? '0.625rem' : 'auto'};
`;

export const InputWrap = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  height: 4.375rem;
  width: 75rem;
  border-radius: 3rem;
  border: none;
  font-size: 1.25rem;
  background-color: #f6f6f6;
  padding-left: 1.8rem;
  font-size: x-large;
`;

export const SendButton = styled.button`
  width: 7.5rem;
  height: 4.375rem;
  margin-left: 3rem;
  border-radius: 1.25rem;
  font-size: x-large;
  font-weight: bold;
  border: none;
  background-color: #650fa9;
  color: #ffffff;
  cursor: pointer;
`;
export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  border-bottom: 2px solid #d8d8d8;
`;

export const ZoomLoginBtn = styled.button`
  width: 7.5rem;
  height: 4.375rem;
  border-radius: 1.25rem;
  font-size: large;
  font-weight: bold;
  border: none;
  background-color: #650fa9;
  color: #ffffff;
  cursor: pointer;
  margin: 0rem 0.625rem 1.25rem 0.625rem;
`;
export const CreateMeetingBtn = styled.button`
  width: 7.5rem;
  height: 4.375rem;
  border-radius: 1.25rem;
  font-size: x-large;
  font-weight: bold;
  border: none;
  background-color: #650fa9;
  color: #ffffff;
  cursor: pointer;
  margin: 0rem 0.625rem 1.25rem 0.625rem;
`;

export const CreateReviewBtn = styled.button`
  width: 7.5rem;
  height: 4.375rem;
  border-radius: 1.25rem;
  font-size: x-large;
  font-weight: bold;
  border: none;
  background-color: #e8dcf2;
  color: #650fa9;
  cursor: pointer;
  margin: 0rem 0.625rem 1.25rem 0.625rem;
`;

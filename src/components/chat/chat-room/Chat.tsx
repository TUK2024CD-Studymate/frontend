import React, { useEffect, useRef, useState } from 'react';
// import attachImg from '../assets/images/attach.png'
// import photoImg from '../assets/images/photo.png'
import { Client } from '@stomp/stompjs';
import axios from 'axios';
import profileImg from '../../assets/images/profileimg.png';
import { useApiUrlStore } from 'store/store';
import { ChatProps, ContentProps } from './Chat.type';
import {
  Container,
  ChatWrap,
  MessageContainer,
  Profile,
  Messages,
  InputWrap,
  InputField,
  SendButton,
  BtnWrap,
  ZoomLoginBtn,
  CreateMeetingBtn,
  CreateReviewBtn,
} from './Chat.styles';

function Chat({ chatRoomId, onOpen }: ChatProps) {
  const { apiUrl } = useApiUrlStore();

  const [nickname, setNickname] = useState('');

  const [stompClient, setStompClient] = useState<Client | null>(null);

  const [messages, setMessages] = useState<ContentProps[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const chatRef = useRef<HTMLDivElement>(null);

  const [isComposing, setIsComposing] = useState(false);

  // 닉네임 요청
  const getNickname = () => {
    try {
      const nickname = localStorage.getItem('nickname');
      if (nickname) {
        setNickname(nickname);
      } else {
        console.log('저장된 닉네임이 없습니다.');
      }
      console.log('닉네임:', nickname);
    } catch (error) {
      console.error('닉네임을 불러오는 중 오류가 발생했습니다:', error);
    }
  };

  // 채팅 내역
  const fetchChatHistory = async () => {
    try {
      const access = localStorage.getItem('accessToken');
      const response = await axios.get(
        `${apiUrl}/chat/rooms/${chatRoomId}/contents`,
        {
          headers: { Authorization: `Bearer ${access}` },
        },
      );
      console.log(response);
      setMessages(response.data);
    } catch (error) {
      console.error('채팅 내역 로딩 중 오류가 발생했습니다:', error);
    }
  };

  useEffect(() => {
    getNickname();
    fetchChatHistory();

    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.deactivate();
      }
    };
  }, []);

  useEffect(() => {
    initializeChat();
  }, []);

  const initializeChat = async () => {
    const access = localStorage.getItem('accessToken');

    const stomp = new Client({
      brokerURL: 'wss://studymate154.kro.kr/ws/chat',
      connectHeaders: {
        Authorization: `Bearer ${access}`,
      },
      debug: (str: string) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    setStompClient(stomp);

    stomp.activate();

    stomp.onConnect = async () => {
      console.log('WebSocket 연결이 열렸습니다.');

      const subscriptionDestination = `/exchange/chat.exchange/room.${chatRoomId}`;

      stomp.subscribe(subscriptionDestination, (message) => {
        try {
          const parsedMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, parsedMessage]);
        } catch (error) {
          console.error('오류가 발생했습니다:', error);
        }
      });
    };
  };

  const sendMessage = (
    messageContent: string,
    nickname: string,
    messageType: string,
  ) => {
    const destination = `/pub/chat.message.${chatRoomId}`;
    const newMessage: ContentProps = {
      type: messageType,
      chatRoomId: chatRoomId,
      sender: nickname,
      content: messageContent,
    };

    if (stompClient && stompClient.connected) {
      stompClient.publish({
        destination,
        body: JSON.stringify(newMessage),
      });
    }
    setInputMessage('');
  };

  // 메세지 입력시 스크롤 아래로 이동
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const getAuth = async () => {
    try {
      window.open(
        'https://zoom.us/oauth/authorize?response_type=code&client_id=Zgt89KiZRri8SkBqws0SRg&redirect_uri=http%3A%2F%2F34.22.88.56%2Fapi%2Fmeeting%2FzoomApi',
      );
    } catch (error) {}
  };

  const getUrl = async () => {
    try {
      const response = await axios.get(`${apiUrl}/meeting/create`, {});
      const joinUrl = response.data.join_url;
      window.open(response.data.start_url);
      if (nickname) {
        sendMessage(`화상 미팅 참여 링크 : ${joinUrl}`, nickname, 'TALK');
      } else {
        console.error('Nickname이 없습니다.');
      }
      console.log(response.data);
    } catch (error) {
      alert('Zoom 로그인을 먼저 해주세요!');
    }
  };

  const handleZoomLogin = async () => {
    try {
      getAuth();
    } catch (error) {}
  };

  const handleCreateMeeting = async () => {
    try {
      getUrl();
    } catch (error) {}
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isComposing && event.key === 'Enter') {
      if (nickname) {
        sendMessage(inputMessage, nickname, 'TALK');
      } else {
        console.error('Nickname이 없습니다.');
      }
    }
  };

  const handleComposition = (
    event: React.CompositionEvent<HTMLInputElement>,
  ) => {
    if (event.type === 'compositionstart') {
      setIsComposing(true);
    } else if (event.type === 'compositionend') {
      setIsComposing(false);
    }
  };

  return (
    <div>
      <Container>
        <BtnWrap>
          <ZoomLoginBtn onClick={handleZoomLogin}>Zoom 로그인</ZoomLoginBtn>
          <CreateMeetingBtn onClick={handleCreateMeeting}>
            회의 생성
          </CreateMeetingBtn>
          <CreateReviewBtn onClick={onOpen}>리뷰 작성</CreateReviewBtn>
        </BtnWrap>
        <ChatWrap ref={chatRef}>
          {messages.map((message, index) => (
            <MessageContainer
              key={index}
              sender={message.sender}
              nickname={nickname || ''}
            >
              {message.sender !== nickname && (
                <Profile
                  sender={message.sender}
                  nickname={nickname || ''}
                  src={profileImg}
                />
              )}
              <Messages sender={message.sender} nickname={nickname || ''}>
                {message.content}
              </Messages>
              {message.sender === nickname && (
                <Profile
                  sender={message.sender}
                  nickname={nickname || ''}
                  src={profileImg}
                />
              )}
            </MessageContainer>
          ))}
        </ChatWrap>
        <InputWrap>
          <InputField
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            onCompositionStart={handleComposition}
            onCompositionEnd={handleComposition}
          />
          <SendButton
            onClick={() => sendMessage(inputMessage, nickname, 'TALK')}
          >
            전송
          </SendButton>
        </InputWrap>
      </Container>
    </div>
  );
}

export default Chat;

import ChatIMG from '../../assets/images/chatIcon.png';
import { FaCircle } from 'react-icons/fa6';
import { RxDividerVertical } from 'react-icons/rx';
import { useApiUrlStore, useChatListStore } from "store/store";
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  MainWrap,
  ImgWrap,
  ProfileImg,
  InfoWrap,
  Top,
  NameWrap,
  Name,
  NickName,
  Bottom,
  Interest,
  Detail,
  StatusWrap,
  Status,
  FooterWrap,
  MessageCount,
  NoChatList,
  Text
} from './ChatList.styles';


function ChatList() {
  const { apiUrl } = useApiUrlStore();
  const { chatList, setChatList } = useChatListStore();

  const getChatList = async () => {
    try {
      const access = localStorage.getItem('accessToken');
      const response = await axios.get(`${apiUrl}/chat/rooms/list`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      setChatList(response.data);
      console.log('api응답', response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getChatList();
  }, []);

  return (
    <div>
      {chatList.length === 0 ? (
        <NoChatList>
          <img src={ChatIMG} width={150} alt="Chat Icon" />
          <Text>입장할 채팅방이 없습니다.</Text>
        </NoChatList>
      ) : (
        chatList
          .slice()
          .reverse()
          .map((chat) => (
            <Link
              to={`/chats/room/${chat.chatRoomId}/${chat.members[0].id}`}
              key={chat.chatRoomId}
            >
              <Container>
                <MainWrap>
                  <ImgWrap>
                    <ProfileImg
                      src={chat.members[0].profileImageUrl}
                      alt="프로필 이미지"
                    />
                  </ImgWrap>
                  <InfoWrap>
                    <Top>
                      <NameWrap>
                        <Name>{chat.members[0].name}</Name>
                        <NickName>{chat.members[0].nickname}</NickName>
                      </NameWrap>
                      <StatusWrap>
                        <FaCircle
                          color={chat.members[0].login ? '#2DC260' : '#9b9b9b'}
                        />
                        <Status>
                          {chat.members[0].login ? '온라인' : '오프라인'}
                        </Status>
                      </StatusWrap>
                    </Top>
                    <Bottom>
                      <Interest>{chat.members[0].interests[0]}</Interest>
                      <RxDividerVertical color="#9b9b9b" size={28} />
                      <Detail>{chat.members[0].expertiseField}</Detail>
                    </Bottom>
                  </InfoWrap>
                </MainWrap>
                <FooterWrap>
                  <MessageCount count={chat.unreadMessageCount}>
                    {chat.unreadMessageCount}
                  </MessageCount>
                </FooterWrap>
              </Container>
            </Link>
          ))
      )}
    </div>
  );
}

export default ChatList;

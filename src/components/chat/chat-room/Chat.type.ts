interface ChatProps {
    chatRoomId: string
    onOpen: () => void
  }
  
  interface ContentProps {
    type: string
    chatRoomId: string
    sender: string
    content: string
  }
  
  interface MessagesProps {
    sender?: string
    nickname: string
  }
  
  interface ProfileProps {
    sender?: string
    nickname: string
    src: string
  }
  
  interface MessageContainerProps {
    sender?: string
    nickname: string
  }

  export type { ChatProps, ContentProps, MessagesProps, ProfileProps, MessageContainerProps };
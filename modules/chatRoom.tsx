import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { MessageCard, IMessage } from "../components/card/message";
import { TopCard } from "../components/card/top";
import { AddMessage } from "../components/input/message";
import { USER_ONE } from "../gql/user/one";
import { CREATE_MESSAGE } from "../gql/message/create";
import {
  ChatRoomSection,
  TopSection,
  MessageCardSection,
  AddMessageSection,
} from "../styles/modules/chatRoom";
import { MESSAGE } from "../gql/message/get";
import { MESSAGE_SUB } from "../gql/message/getSub";
import { UserMessageCard } from "../components/card/userMessage";

export const ChatRoom = ({ router }) => {
  const [hasLoading, setHasLoading] = useState(true);

  const [topUser, setTopUser] = useState({
    id: null,
    profileImage: null,
    username: null,
    firstname: null,
    lastname: null,
    status: null,
  });

  const [userName, setUserName] = useState(null);

  const [messages, setMessages] = useState([]);

  const [value, setValue] = useState("");

  const [media, setMedia] = useState("");

  const roomUser: string = router?.query?.room;

  const {
    data: tData,
    loading: tLoading,
    error: tError,
  } = useQuery(USER_ONE, {
    variables: {
      username: roomUser,
    },
  });

  const [addMessage, { data: mData, loading: mLoading, error: mError }] =
    useMutation(CREATE_MESSAGE);

  const {
    data: gmData,
    loading: gmLoading,
    error: gmError,
  } = useQuery(MESSAGE, {
    variables: {
      roomUsername: roomUser,
    },
  });

  const {
    data: sData,
    loading: sLoading,
    error: sError,
  } = useSubscription(MESSAGE_SUB, {
    variables: {
      username: userName,
      roomUsername: roomUser,
    },
  });

  useEffect(() => {
    const load: boolean = gmLoading || tLoading;
    setHasLoading(load);
  }, [gmLoading, tLoading]);

  // user

  useEffect(() => {
    setUserName(localStorage.getItem("USER"));
  }, []);

  useEffect(() => {
    if (tData?.getOneUser) {
      setTopUser(tData.getOneUser);
    }
  }, [tData?.getOneUser]);

  // message

  useEffect(() => {
    if (gmData?.getMessage) {
      setMessages(gmData?.getMessage);
    }
  }, [gmData?.getMessage]);

  useEffect(() => {
    if (sData?.getMessageSub) {
      setMessages(sData.getMessageSub);
    }
  }, [sData?.getMessageSub]);

  // create message

  useEffect(() => {
    if (mData?.createMessage) {
      setValue("");
      setMedia("");
    }
  }, [mData?.createMessage]);

  const valueChangeHandel = (e: any) => {
    setValue(e.target.value);
  };

  const addMessageHanel = (e: any) => {
    e?.preventDefault();
    addMessage({
      variables: {
        roomUsername: roomUser,
        text: value,
        media,
      },
    });
  };

  if (hasLoading) {
    return <h1>Loading...</h1>;
  }

  if (!hasLoading) {
    return (
      <>
        <ChatRoomSection>
          <TopSection>
            <TopCard props={topUser} />
          </TopSection>
          <MessageCardSection>
            {messages?.map((mess: IMessage) => {
              console.log(mess, "mess");
              return mess?.User?.username === userName ? (
                <UserMessageCard key={mess.id} props={mess} />
              ) : (
                <MessageCard key={mess.id} props={mess} />
              );
            })}
          </MessageCardSection>
          <AddMessageSection>
            <AddMessage
              name="value"
              onChange={valueChangeHandel}
              onSubmit={addMessageHanel}
              profileImage={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S6eD5sNMZb5C-oPNMYfTIwHaEx%26pid%3DApi&f=1"
              }
              value={value}
            />
          </AddMessageSection>
        </ChatRoomSection>
      </>
    );
  }
};

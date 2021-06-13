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
import { LIKE } from "../gql/message/like";
import { DELETE } from "../gql/message/delete";

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

  // user

  const {
    data: tData,
    loading: tLoading,
    error: tError,
  } = useQuery(USER_ONE, {
    variables: {
      username: roomUser,
    },
    onError() {},
  });

  // create message

  const [addMessage, { data: mData, loading: mLoading, error: mError }] =
    useMutation(CREATE_MESSAGE, {
      onError() {},
    });

  // message

  const {
    data: gmData,
    loading: gmLoading,
    error: gmError,
  } = useQuery(MESSAGE, {
    variables: {
      roomUsername: roomUser,
    },
    onError() {},
  });

  // message subscription

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

  // like message

  const [onLike, { data: lData, loading: lLoading, error: lError }] =
    useMutation(LIKE);

  // delete message
  const [onDelete, { data: dData, loading: dLoading, error: dError }] =
    useMutation(DELETE);

  // loading

  useEffect(() => {
    const load: boolean = gmLoading || tLoading;
    setHasLoading(load);
  }, [gmLoading, tLoading]);

  //set user storage

  useEffect(() => {
    setUserName(localStorage.getItem("USER"));
  }, []);

  //call srcoll bar

  useEffect(() => {
    if (!hasLoading || mData) {
      srcollBarBottom();
    }
  }, [hasLoading, mData]);

  // set user

  useEffect(() => {
    if (tData?.getOneUser) {
      setTopUser(tData.getOneUser);
    }
  }, [tData?.getOneUser]);

  //set message

  useEffect(() => {
    if (gmData?.getMessage) {
      setMessages(gmData?.getMessage);
    }
  }, [gmData?.getMessage]);

  // set message

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

  const srcollBarBottom = () => {
    const messageSec = document.querySelector("#mc_sec");
    messageSec.scrollTop = messageSec.scrollHeight - messageSec.clientHeight;
  };

  const likeHandel = (id: number) => {
    if (id) {
      onLike({
        variables: {
          id,
        },
      });
    }
  };

  const deleteHandel = (id: number) => {
    if (id) {
      onDelete({
        variables: {
          id,
        },
      });
    }
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
          <MessageCardSection id="mc_sec">
            {messages?.map((mess: IMessage) => {
              return mess?.User?.username === userName ? (
                <UserMessageCard
                  key={mess.id}
                  props={mess}
                  onDelete={deleteHandel}
                  roomUserId={topUser?.id}
                />
              ) : (
                <MessageCard
                  key={mess.id}
                  props={mess}
                  onLike={likeHandel}
                  roomUserId={topUser?.id}
                />
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

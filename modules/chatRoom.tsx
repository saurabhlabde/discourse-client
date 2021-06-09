import { useState } from "react";
import { MessageCard, IMessage } from "../components/card/message";
import { TopCard } from "../components/card/top";
import { AddMessage } from "../components/input/message";
import {
  ChatRoomSection,
  TopSection,
  MessageCardSection,
  AddMessageSection,
} from "../styles/modules/chatRoom";

export const ChatRoom = () => {
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");

  const valueChangeHandel = (e: any) => {
    setValue(e.target.value);
  };

  const addMessageHanel = (e: any) => {
    e?.preventDefault();
    console.log("add message...");
  };

  const topFake = {
    id: 1,
    profileImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h81O9GEMzhdpZ7y4K1E2wwHaJ4%26pid%3DApi&f=1",
    firstname: "jack",
    lastname: "dor",
    username: "jack",
    status: "hello jack here",
  };

  const messageFake = [
    {
      id: 1,
      media:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sKHMEX28sOS33fe-UsxpCwHaHa%26pid%3DApi&f=1",
      createdAt: "1 min",
      text: "new dog",
      User: {
        id: 1,
        username: "jack",
        profileImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h81O9GEMzhdpZ7y4K1E2wwHaJ4%26pid%3DApi&f=1",
      },
    },
    {
      id: 2,
      media: "",
      createdAt: "1 min",
      text: "this is cool new dog",
      User: {
        id: 2,
        username: "sam",
        profileImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S6eD5sNMZb5C-oPNMYfTIwHaEx%26pid%3DApi&f=1",
      },
    },
    {
      id: 3,
      media: "",
      createdAt: "1 min",
      text: "this is cool new dog",
      User: {
        id: 2,
        username: "sam",
        profileImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S6eD5sNMZb5C-oPNMYfTIwHaEx%26pid%3DApi&f=1",
      },
    },
    {
      id: 4,
      media: "",
      createdAt: "1 min",
      text: "this is cool new dog",
      User: {
        id: 2,
        username: "sam",
        profileImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S6eD5sNMZb5C-oPNMYfTIwHaEx%26pid%3DApi&f=1",
      },
    },
    {
      id: 5,
      media:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sKHMEX28sOS33fe-UsxpCwHaHa%26pid%3DApi&f=1",
      createdAt: "1 min",
      text: "new dog",
      User: {
        id: 1,
        username: "jack",
        profileImage:
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h81O9GEMzhdpZ7y4K1E2wwHaJ4%26pid%3DApi&f=1",
      },
    },
  ];

  return (
    <>
      <ChatRoomSection>
        <TopSection>
          <TopCard props={topFake} />
        </TopSection>
        <MessageCardSection>
          {messageFake?.map((mess: IMessage) => {
            return <MessageCard key={mess.id} props={mess} />;
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
};

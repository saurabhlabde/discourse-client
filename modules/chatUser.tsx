import { FC } from "react";

// component
import { Nav } from "../components/nav";
import { SearchBox } from "./searchCard";
import { UserCard } from "../components/card/user";

// style
import {
  ChatsUserSection,
  NavSection,
  SearchSection,
  UserCardSection,
  MessageHeadingSection,
  MessageHeading,
} from "../styles/modules/chatUser";

// type
import { IUser } from "../components/card/user";

export const ChatUser: FC<any> = ({ router }) => {
  console.log(router, "router");

  const fakeNav = {
    id: 1,
    profileImage:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4tNeTrdkyKk_VWcTk-JxNgHaNK%26pid%3DApi&f=1",
    username: "jack",
  };

  const usersFake = [
    {
      id: 1,
      firstname: "sam",
      lastname: "smith",
      username: "samsmith",
      profileImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yvrNJL6zproxnPzT6fZurwHaJw%26pid%3DApi&f=1",
      Message: {
        id: 1,
        message: "hii",
        createdAt: "2d",
      },
    },
    {
      id: 2,
      firstname: "jack",
      lastname: "dor",
      username: "jackdor",
      profileImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h81O9GEMzhdpZ7y4K1E2wwHaJ4%26pid%3DApi&f=1",
      Message: {
        id: 1,
        message: "how are you...",
        createdAt: "2d",
      },
    },
  ];

  return (
    <>
      <ChatsUserSection>
        <NavSection>
          <Nav props={fakeNav} />
        </NavSection>
        <SearchSection>
          <SearchBox />
        </SearchSection>
        <UserCardSection>
          <MessageHeadingSection>
            <MessageHeading>Message</MessageHeading>
          </MessageHeadingSection>
          {usersFake?.map((user: IUser) => {
            return <UserCard key={user.id} props={user} />;
          })}
        </UserCardSection>
      </ChatsUserSection>
    </>
  );
};

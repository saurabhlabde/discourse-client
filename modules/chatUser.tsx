import { FC, useEffect, useState } from "react";

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
  NotAnyMessageSection,
  NotMessage,
} from "../styles/modules/chatUser";

// type
import { IUser } from "../components/card/user";
import { useQuery } from "@apollo/client";
import { USER } from "../gql/user/user";
import { MESSAGE } from "../gql/message/get";
import { CHAT_USER } from "../gql/message/chatUser";
import { NavBottom } from "../components/bottomNav";

export const ChatUser: FC<any> = () => {
  const [hasLoading, setHasLoading] = useState(true);

  const [user, setUser] = useState({
    id: null,
    profileImage: null,
    username: null,
  });

  const [message, setMessage] = useState([]);

  const { data, loading, error } = useQuery(USER);

  const { data: mData, loading: mLoading, error: mError } = useQuery(CHAT_USER);

  useEffect(() => {
    const load: boolean = loading || mLoading;
    setHasLoading(load);
  }, [mLoading, loading]);

  useEffect(() => {
    if (data?.getUser) {
      const { id, profileImage, username } = data.getUser;

      setUser({
        id,
        username,
        profileImage,
      });
    }
  }, [data?.getUser]);

  useEffect(() => {
    if (mData?.chatUsers) {
      setMessage(mData.chatUsers);
    }
  }, [mData?.chatUsers]);

  if (hasLoading) {
    return <h1>Loading...</h1>;
  }

  if (!hasLoading) {
    return (
      <>
        <ChatsUserSection>
          <NavSection>
            <Nav props={user} />
          </NavSection>
          <SearchSection>
            <SearchBox />
          </SearchSection>
          <UserCardSection>
            <MessageHeadingSection>
              <MessageHeading>Message</MessageHeading>
            </MessageHeadingSection>
            {message?.length >= 1 ? (
              <>
                {message?.map((user: IUser) => {
                  return <UserCard key={user.User.id} props={user} />;
                })}
              </>
            ) : (
              <>
                <NotAnyMessageSection>
                  <NotMessage>Haven't any message yet!</NotMessage>
                </NotAnyMessageSection>
              </>
            )}
          </UserCardSection>
          <NavBottom />
        </ChatsUserSection>
      </>
    );
  }
};

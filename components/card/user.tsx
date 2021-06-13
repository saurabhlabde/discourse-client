import Link from "next/link";
import { FC } from "react";
import { AgoTime } from "../../utils/TimeAgo";

// style
import {
  CardSection,
  LeftSection,
  RightSection,
  ProfileSection,
  Profile,
  UserInfoSection,
  UsernameFLNameSection,
  UsernameSection,
  FLNameSection,
  Username,
  FirstName,
  LastName,
  LastMessageSection,
  LastMessage,
  TimeSection,
  TimeT,
} from "../../styles/components/card/user";

export interface IUser {
  User: {
    id: number;
    profileImage: string;
    firstname: string;
    lastname: string;
    username: string;
  };

  lastMessage: {
    id: number;
    text: string;
    status: string;
    media: string;
    createdAtIso: string;
  };
}

interface IUserCard {
  props: IUser;
}

export const UserCard: FC<IUserCard> = ({ props: { User, lastMessage } }) => {
  const { id: uid, firstname, lastname, profileImage, username } = User;
  const { createdAtIso, id, media, status, text } = lastMessage;

  const activeUser = localStorage.getItem("USER");

  const userLink = `/cr/${activeUser}?room=${username}`;

  const time = AgoTime({ created: createdAtIso });

  return (
    <>
      <Link href={userLink}>
        <CardSection>
          <LeftSection>
            <ProfileSection>
              <Profile
                src={
                  profileImage?.trim() !== ""
                    ? profileImage
                    : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.yvrNJL6zproxnPzT6fZurwHaJw%26pid%3DApi&f=1"
                }
              />
            </ProfileSection>
            <UserInfoSection>
              <UsernameFLNameSection>
                <FLNameSection>
                  <FirstName>{firstname ? firstname : ""}</FirstName>
                  <LastName>{lastname ? lastname : ""}</LastName>
                </FLNameSection>
                <UsernameSection>
                  <Username>@{username ? username : ""}</Username>
                </UsernameSection>
              </UsernameFLNameSection>
              <LastMessageSection>
                <LastMessage>{text ? text : ""}</LastMessage>
              </LastMessageSection>
            </UserInfoSection>
          </LeftSection>
          <RightSection>
            <TimeSection>
              <TimeT>
                <span>{time && time !== "NaNyr" ? time : ""}</span>
              </TimeT>
            </TimeSection>
          </RightSection>
        </CardSection>
      </Link>
    </>
  );
};

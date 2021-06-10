import { FC } from "react";

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
  id: number;
  profileImage: string;
  firstname: string;
  lastname: string;
  username: string;
  Message: {
    id: number;
    message: string;
    createdAt: string;
  };
}

interface IUserCard {
  props: IUser;
}

export const UserCard: FC<IUserCard> = ({
  props: { id, firstname, lastname, username, profileImage, Message },
}) => {
  const time = "1d";
  return (
    <>
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
              <LastMessage>
                {Message.message ? Message.message : ""}
              </LastMessage>
            </LastMessageSection>
          </UserInfoSection>
        </LeftSection>
        <RightSection>
          <TimeSection>
            <TimeT>{time}</TimeT>
          </TimeSection>
        </RightSection>
      </CardSection>
    </>
  );
};

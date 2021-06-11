import Link from "next/link";
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
  status: string;
}

interface ISearchCard {
  props: IUser;
}

export const SearchCard: FC<ISearchCard> = ({
  props: { id, firstname, lastname, username, profileImage, status },
}) => {
  const activeUser = localStorage.getItem("USER");

  const userLink = `/cr/${activeUser}?room=${username}`;

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
                <LastMessage>{status ? status : "no status"}</LastMessage>
              </LastMessageSection>
            </UserInfoSection>
          </LeftSection>
          <RightSection></RightSection>
        </CardSection>
      </Link>
    </>
  );
};

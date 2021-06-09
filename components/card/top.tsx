import { FC } from "react";
import BackIcon from "../../icon/back";

// style
import {
  TopCardSection,
  BackButton,
  UserInfoSection,
  ProfileSection,
  Profile,
  InfoSection,
  TopSection,
  BottomSection,
  FLNameSection,
  UsernameSection,
  FirstName,
  LastName,
  Username,
  StatusSection,
  Status,
} from "../../styles/components/card/top";

interface IUserTop {
  id: number;
  profileImage: string;
  firstname: string;
  lastname: string;
  username: string;
  status: string;
}
interface ITopCard {
  props: IUserTop;
}

export const TopCard: FC<ITopCard> = ({
  props: { id, firstname, lastname, profileImage, status, username },
}) => {
  return (
    <>
      <TopCardSection>
        <BackButton>
          <BackIcon />
        </BackButton>
        <UserInfoSection>
          <ProfileSection>
            <Profile src={profileImage ? profileImage : ""} />
          </ProfileSection>
          <InfoSection>
            <TopSection>
              <FLNameSection>
                <FirstName>{firstname ? firstname : ""}</FirstName>
                <LastName>{lastname ? lastname : ""}</LastName>
              </FLNameSection>
              <UsernameSection>
                <Username>@{username ? username : ""}</Username>
              </UsernameSection>
            </TopSection>
            <BottomSection>
              <StatusSection>
                <Status>{status ? status : "online"}</Status>
              </StatusSection>
            </BottomSection>
          </InfoSection>
        </UserInfoSection>
      </TopCardSection>
    </>
  );
};

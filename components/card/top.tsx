import { FC } from "react";
import BackIcon from "../../icon/back";

// style
import {
  TopCardSection,
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
import { BackButton } from "../button/back";

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
        <BackButton />
        <UserInfoSection>
          <ProfileSection>
            <Profile
              src={
                profileImage
                  ? profileImage
                  : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.h81O9GEMzhdpZ7y4K1E2wwHaJ4%26pid%3DApi&f=1"
              }
            />
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

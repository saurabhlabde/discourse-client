import { FC } from "react";

// style
import {
  NavSection,
  ProfileSection,
  Profile,
  HiMessageSection,
  HiMessage,
} from "../styles/components/nav";

interface INav {
  props: {
    id: number;
    profileImage: string;
    username: string;
  };
}

export const Nav: FC<INav> = ({ props: { id, profileImage, username } }) => {
  return (
    <>
      <NavSection>
        <ProfileSection>
          <Profile
            src={
              profileImage
                ? profileImage
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rfCgo3KrkLKDlc1nCZpCsAHaE8%26pid%3DApi&f=1"
            }
          />
        </ProfileSection>
        <HiMessageSection>
          <HiMessage>Hello, {username ? username : "user"}</HiMessage>
        </HiMessageSection>
      </NavSection>
    </>
  );
};

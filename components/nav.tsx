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
          <Profile src={profileImage ? profileImage : ""} />
        </ProfileSection>
        <HiMessageSection>
          <HiMessage>Hello, {username ? username : "user"}</HiMessage>
        </HiMessageSection>
      </NavSection>
    </>
  );
};

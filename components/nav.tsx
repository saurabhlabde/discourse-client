import { FC } from "react";
import MobileIcon from "../icon/mobile";
import DesktopIcon from "../icon/desktop";

// style
import {
  NavSection,
  ProfileSection,
  Profile,
  HiMessageSection,
  HiMessage,
  LeftSection,
  DeviceSection,
} from "../styles/components/nav";
import { ScreenSize } from "../utils/screenSize";

interface INav {
  props: {
    id: number;
    profileImage: string;
    username: string;
  };
}

export const Nav: FC<INav> = ({ props: { id, profileImage, username } }) => {
  const screenSize = ScreenSize();

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

        <LeftSection>
          <DeviceSection>
            {screenSize >= 600 ? <DesktopIcon /> : <MobileIcon />}
          </DeviceSection>
          <HiMessageSection>
            <HiMessage>
              <span>Hello, {username ? username : "user"}</span>
            </HiMessage>
          </HiMessageSection>
        </LeftSection>
      </NavSection>
    </>
  );
};

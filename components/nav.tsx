import { FC, useEffect, useState } from "react";
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
  const [screenSize, setScreenSize] = useState(500);

  const ViewPort: number = ScreenSize();

  useEffect(() => {
    setScreenSize(ViewPort);
  }, [ViewPort]);

  return (
    <>
      <NavSection>
        <ProfileSection>
          <Profile
            src={
              profileImage
                ? profileImage
                : "https://i.ibb.co/R7nKxRV/gradienta-1-Lirzgcp-Y2c-unsplash.jpg"
            }
          />
        </ProfileSection>

        <LeftSection>
          <DeviceSection>
            {screenSize >= 800 ? <DesktopIcon /> : <MobileIcon />}
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

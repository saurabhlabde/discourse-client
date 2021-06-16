import Link from "next/link";
import { useEffect, useState } from "react";
import BackIcon from "../icon/back";
import HomeIcon from "../icon/home";
import LightIcon from "../icon/light";
import LogoutIcon from "../icon/logout";
import {
  NavBottomSection,
  NavItemSection,
  ProfileSection,
} from "../styles/components/bottomNav";

export const NavBottom = () => {
  const [visible, setVisible] = useState(false);

  const themeHandel = () => {};

  const handelVisble = () => {
    setVisible(!visible);
  };

  const Icons = [
    {
      link: "/",
      name: "home",
      icon: <HomeIcon />,
    },
    {
      link: "/logout",
      name: "logout",
      icon: <LogoutIcon />,
    },
  ];

  const profileImage: string = localStorage.getItem("PROFILE_IMG");

  return (
    <>
      <NavBottomSection>
        {visible && (
          <NavItemSection>
            <ProfileSection
              src={
                profileImage
                  ? profileImage
                  : "https://i.ibb.co/R7nKxRV/gradienta-1-Lirzgcp-Y2c-unsplash.jpg"
              }
            />
          </NavItemSection>
        )}
        {visible &&
          Icons?.map((icon, i) => {
            return (
              <>
                <Link href={icon.link}>
                  <NavItemSection key={`nb_${i}`} className={`ni_${icon.name}`}>
                    {icon.icon}
                  </NavItemSection>
                </Link>
              </>
            );
          })}

        <NavItemSection
          onClick={handelVisble}
          className={`sh_icon ${
            visible ? "sh_icon_visible" : "sh_icon_unVisible"
          } `}
        >
          <BackIcon />
        </NavItemSection>
      </NavBottomSection>
    </>
  );
};

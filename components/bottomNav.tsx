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

  return (
    <>
      <NavBottomSection>
        {visible && (
          <NavItemSection>
            <ProfileSection
              src={
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.IwhOChg5puRQdL2Fn-rZgAAAAA%26pid%3DApi&f=1"
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

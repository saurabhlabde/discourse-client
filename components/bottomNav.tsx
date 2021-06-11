import Link from "next/link";
import { useState } from "react";
import BackIcon from "../icon/back";
import {
  NavBottomSection,
  NavItemSection,
} from "../styles/components/bottomNav";

export const NavBottom = () => {
  const [visible, setVisible] = useState(false);

  const Icons = [
    {
      link: "",
      name: "P",
    },
    {
      link: "/logout",
      name: "L",
    },
    {
      link: "/",
      name: "H",
    },
  ];

  const handelVisble = () => {
    setVisible(!visible);
  };

  return (
    <>
      <NavBottomSection>
        {visible &&
          Icons?.map((icon, i) => {
            return (
              <>
                <Link href={icon.link}>
                  <NavItemSection key={i}>
                    <BackIcon />
                  </NavItemSection>
                </Link>
              </>
            );
          })}

        <NavItemSection onClick={handelVisble}>
          <BackIcon />
        </NavItemSection>
      </NavBottomSection>
    </>
  );
};

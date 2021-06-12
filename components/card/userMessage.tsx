import { FC, useState } from "react";
import { AgoTime } from "../../utils/TimeAgo";

import LikeIcon from "../../icon/like";
import LikeFillIcon from "../../icon/likeFill";
import DeleteIcon from "../../icon/delete";

//style
import {
  ProfileSection,
  Profile,
  ContentSection,
  ContentText,
  TextSection,
  ContentMedia,
  MediaSection,
  BottomSection,
  UsernameSection,
  Username,
  TimeSection,
  TimeT,
  IconsSection,
  Icons,
} from "../../styles/components/card/message";
import { IMessageCard } from "./message";
import {
  UserTopSection,
  UserMessageCardSection,
  UserOtherInfoSection,
} from "../../styles/components/card/userMessage";

export const UserMessageCard: FC<IMessageCard> = ({
  props: {
    id,
    text,
    media,
    createdAtIso,
    User: { id: uid, username, profileImage },
  },
}) => {
  const [hover, setHover] = useState(false);

  const time = AgoTime({ created: createdAtIso });

  const mouseInHandel = () => {
    setHover(true);
  };

  const mouseOutHandel = () => {
    setHover(false);
  };

  return (
    <>
      <UserMessageCardSection
        onMouseEnter={mouseInHandel}
        onMouseLeave={mouseOutHandel}
      >
        <IconsSection
          className={`icon_sec ${hover ? "icon_sec_v" : "icon_sec_uv"}`}
        >
          <Icons className="like_icon">
            <LikeIcon />
          </Icons>
          <Icons className="delete_icon">
            <DeleteIcon />
          </Icons>
        </IconsSection>
        <ContentSection>
          <UserTopSection>
            <TextSection>
              <ContentText>
                <span>{text ? text : ""}</span>
              </ContentText>
            </TextSection>
            {media?.trim() !== "" && (
              <MediaSection>
                <ContentMedia src={media ? media : ""} />
              </MediaSection>
            )}
          </UserTopSection>
          <BottomSection>
            <UserOtherInfoSection>
              <UsernameSection>
                <Username>
                  <span>{username ? "You" : ""}</span>
                </Username>
              </UsernameSection>
              <TimeSection>
                <TimeT>
                  <span>{time}</span>
                </TimeT>
              </TimeSection>
            </UserOtherInfoSection>
          </BottomSection>
        </ContentSection>
        <ProfileSection>
          <Profile
            src={
              profileImage
                ? profileImage
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lqlskL6yTMD8CgwD2uam0AHaFI%26pid%3DApi&f=1"
            }
          />
        </ProfileSection>
      </UserMessageCardSection>
    </>
  );
};

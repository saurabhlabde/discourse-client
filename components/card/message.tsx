import { FC, useState } from "react";
import { AgoTime } from "../../utils/TimeAgo";

//style
import {
  MessageCardSection,
  ProfileSection,
  Profile,
  ContentSection,
  TopSection,
  ContentText,
  TextSection,
  ContentMedia,
  MediaSection,
  BottomSection,
  OtherInfoSection,
  UsernameSection,
  Username,
  TimeSection,
  TimeT,
  IconsSection,
  Icons,
} from "../../styles/components/card/message";
import LikeIcon from "../../icon/like";
import DeleteIcon from "../../icon/delete";
import LikeFillIcon from "../../icon/likeFill";

export interface IMessage {
  id: number;
  createdAtIso: string;
  media: string;
  text: string;
  User: {
    id: number;
    username: string;
    profileImage: string;
  };
  Like: Array<{
    id: number;
    userId: number;
    createdAtIso: string;
  }>;
}
export interface IMessageCard {
  props: IMessage;
  roomUserId: number;
  onLike?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export const MessageCard: FC<IMessageCard> = ({
  props: {
    id,
    text,
    media,
    createdAtIso,
    User: { id: uid, username, profileImage },
    Like,
  },
  onLike,
  roomUserId,
}) => {
  const [hover, setHover] = useState(false);

  const time = AgoTime({ created: createdAtIso });

  const mouseInHandel = () => {
    setHover(true);
  };

  const mouseOutHandel = () => {
    setHover(false);
  };

  const getUserId: string | null = localStorage.getItem("UID");

  const liked = Like?.filter((like) => {
    return like.userId === +getUserId;
  });

  const hasLike: boolean = liked?.length >= 1;

  return (
    <>
      <MessageCardSection
        onMouseEnter={mouseInHandel}
        onMouseLeave={mouseOutHandel}
      >
        <ProfileSection>
          <Profile
            src={
              profileImage
                ? profileImage
                : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lqlskL6yTMD8CgwD2uam0AHaFI%26pid%3DApi&f=1"
            }
          />
        </ProfileSection>
        <ContentSection>
          <TopSection style={{ backgroundColor: hasLike ? "#ff7904" : "" }}>
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
          </TopSection>
          <BottomSection>
            <OtherInfoSection>
              <UsernameSection>
                <Username>
                  <span>{username ? username : ""}</span>
                </Username>
              </UsernameSection>
              <TimeSection>
                <TimeT>
                  <span>{time ? time : ""}</span>
                </TimeT>
              </TimeSection>
            </OtherInfoSection>
          </BottomSection>
        </ContentSection>
        <IconsSection
          className={`icon_sec icon_sec_m ${
            hover ? "icon_sec_v" : "icon_sec_uv"
          }`}
        >
          <Icons
            className="like_icon"
            onClick={() => {
              onLike ? onLike(id) : undefined;
            }}
          >
            {hasLike ? <LikeFillIcon /> : <LikeIcon />}
          </Icons>
        </IconsSection>
      </MessageCardSection>
    </>
  );
};

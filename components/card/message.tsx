import { FC } from "react";
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
} from "../../styles/components/card/message";

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
}
export interface IMessageCard {
  props: IMessage;
}

export const MessageCard: FC<IMessageCard> = ({
  props: {
    id,
    text,
    media,
    createdAtIso,
    User: { id: uid, username, profileImage },
  },
}) => {
  const time = AgoTime({ created: createdAtIso });

  return (
    <>
      <MessageCardSection>
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
          <TopSection>
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
                  <span>{time}</span>
                </TimeT>
              </TimeSection>
            </OtherInfoSection>
          </BottomSection>
        </ContentSection>
      </MessageCardSection>
    </>
  );
};

import { FC } from "react";

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
  createdAt: string;
  media: string;
  text: string;
  User: {
    id: number;
    username: string;
    profileImage: string;
  };
}
interface IMessageCard {
  props: IMessage;
}

export const MessageCard: FC<IMessageCard> = ({
  props: {
    id,
    text,
    media,
    createdAt,
    User: { id: uid, username, profileImage },
  },
}) => {
  const time = "15 min";
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
              <ContentText>{text ? text : ""}</ContentText>
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
                <Username>{username ? username : ""}</Username>
              </UsernameSection>
              <TimeSection>
                <TimeT>{time}</TimeT>
              </TimeSection>
            </OtherInfoSection>
          </BottomSection>
        </ContentSection>
      </MessageCardSection>
    </>
  );
};

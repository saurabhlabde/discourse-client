import { FC } from "react";
import { AgoTime } from "../../utils/TimeAgo";

//style
import {
  MessageCardSection,
  ProfileSection,
  Profile,
  ContentSection,
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
  const time = AgoTime({ created: createdAtIso });

  return (
    <>
      <UserMessageCardSection>
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

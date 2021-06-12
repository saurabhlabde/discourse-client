import { FC } from "react";
import MessageIcon from "../../icon/message";
import MediaIcon from "../../icon/media";

// style
import {
  AddMessageSection,
  MessageForm,
  ProfileSection,
  Profile,
  InputSection,
  Input,
  SendButton,
  MediaSelectSection,
} from "../../styles/components/input/message";

interface IAddMessage {
  profileImage: string;
  value: string;
  name: string;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

export const AddMessage: FC<IAddMessage> = ({
  onChange,
  onSubmit,
  profileImage,
  value,
  name,
}) => {
  return (
    <>
      <AddMessageSection>
        <MessageForm onSubmit={onSubmit ? onSubmit : undefined}>
          <ProfileSection>
            <Profile src={profileImage} />
          </ProfileSection>
          <InputSection>
            <Input
              name={name}
              value={value}
              placeholder="Type something..."
              onChange={onChange ? onChange : undefined}
            />
          </InputSection>
          <MediaSelectSection>
            <MediaIcon />
          </MediaSelectSection>
          <SendButton onClick={onSubmit ? onSubmit : undefined}>
            <MessageIcon />
          </SendButton>
        </MessageForm>
      </AddMessageSection>
    </>
  );
};

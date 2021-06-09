import { FC } from "react";
import MessageIcon from "../../icon/message";

// style
import {
  AddMessageSection,
  MessageForm,
  ProfileSection,
  Profile,
  InputSection,
  Input,
  SendButton,
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
          <SendButton>
            <MessageIcon />
          </SendButton>
        </MessageForm>
      </AddMessageSection>
    </>
  );
};

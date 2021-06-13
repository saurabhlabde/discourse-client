import { FC, useState } from "react";
import MessageIcon from "../../icon/message";
import MediaIcon from "../../icon/media";
import DeleteIcon from "../../icon/delete";
import { PopUpMediaSelcect } from "../card/popUpMedia";

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
  SelectedMediaSection,
  SelectedMediaSec,
  SelectedMedia,
  SMIconSection,
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
  const [showMediaSelector, setShowMediaSelector] = useState(false);

  const mediaShowHandel = () => {
    setShowMediaSelector(!showMediaSelector);
  };

  return (
    <>
      <AddMessageSection>
        {showMediaSelector && <PopUpMediaSelcect />}
        <SelectedMediaSection>
          {/* <SelectedMediaSec>
            <SMIconSection>
              <DeleteIcon />
            </SMIconSection>
            <SelectedMedia
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.HyLRhubPNokhCWEetNp0SgHaFY%26pid%3DApi&f=1"
              alt=""
            />
          </SelectedMediaSec> */}
        </SelectedMediaSection>
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
          <MediaSelectSection onClick={mediaShowHandel}>
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

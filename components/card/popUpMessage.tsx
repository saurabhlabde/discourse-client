import { FC } from "react";
import BackIcon from "../../icon/back";
import { IPopMessage } from "../../modules/auth";

import {
  PopUpMessageSection,
  LeftSection,
  RightSection,
  Message,
  MessageSection,
  CloseSection,
} from "../../styles/components/card/popUpMessage";

interface IPopUpMessageCard {
  props: IPopMessage;
  onClose: (id: string) => void;
}

export const PopUpMessageCard: FC<IPopUpMessageCard> = ({
  props: { id, message, type },
  onClose,
}) => {
  return (
    <>
      <PopUpMessageSection className={`pms_${type}`} id={`${id}_id`}>
        <LeftSection>
          <MessageSection>
            <Message>
              <span>{message ? message : "Invalid"}</span>
            </Message>
          </MessageSection>
        </LeftSection>
        <RightSection>
          <CloseSection
            onClick={() => {
              onClose ? onClose(id) : undefined;
            }}
          >
            <BackIcon />
          </CloseSection>
        </RightSection>
      </PopUpMessageSection>
    </>
  );
};

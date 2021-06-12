import { Dispatch, FC, SetStateAction, useEffect } from "react";

// component
import { AuthInput } from "../components/input/auth";
import { HeadingAuth } from "../components/heading/auth";
import { BottomHeading } from "../components/heading/bottom";
import { ButtonAuth } from "../components/button/auth";
import { ToastContainer, toast } from "react-toastify";

// style
import {
  AuthSection,
  AuthCard,
  AuthHeadingSection,
  AuthFrom,
  AuthInputSection,
  AuthBottomSection,
} from "../styles/modules/auth";

import { PopUpMainSection } from "../styles/components/card/popUpMessage";
import { PopUpMessageCard } from "../components/card/popUpMessage";

export interface IInput {
  name: string;
  placeholder: string;
  value: string;
}

export interface IPopMessage {
  id: string;
  message: string;
  type: "error" | "success" | string;
}

interface IAuthPage {
  props: Array<IInput>;
  onValueChange: (e: any) => void;
  heading: string;
  bottomText: string;
  bottomRedirectLink: string;
  buttonName: string;
  message: Array<IPopMessage>;
  onSubmit: (e: any) => void;
}

interface INotify {
  id: string;
  message: string;
}

export const AuthPage: FC<IAuthPage> = ({
  heading,
  props,
  onValueChange,
  bottomText,
  bottomRedirectLink,
  onSubmit,
  buttonName,
  message,
}) => {
  const messageLength: boolean = message.length >= 1;

  const notifyError = ({ id, message }: INotify) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "pop-message pop-message-error",
      toastId: id,
    });
  };

  const notifySuccess = ({ id, message }: INotify) => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
      className: "pop-message pop-message-error",
      toastId: id,
    });
  };

  useEffect(() => {
    if (message?.length <= 0) return;

    message?.map((pop: IPopMessage) => {
      if (pop.type === "error") {
        return notifyError({ id: pop.id, message: pop.message });
      } else if (pop.type === "success") {
        return notifySuccess({ id: pop.id, message: pop.message });
      }
    });
  }, [message]);

  return (
    <>
      <AuthSection>
        <AuthCard>
          <AuthHeadingSection>
            <HeadingAuth heading={heading} />
          </AuthHeadingSection>

          <AuthFrom onSubmit={onSubmit ? onSubmit : undefined}>
            <AuthInputSection>
              {props?.map((ins: IInput, i: number) => {
                return (
                  <AuthInput key={i} props={ins} onChange={onValueChange} />
                );
              })}
            </AuthInputSection>
            <ButtonAuth buttonName={buttonName} />
          </AuthFrom>
          <AuthBottomSection>
            <BottomHeading rLink={bottomRedirectLink} text={bottomText} />
          </AuthBottomSection>
        </AuthCard>
        <ToastContainer />
      </AuthSection>
    </>
  );
};

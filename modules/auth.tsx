import { Dispatch, FC, SetStateAction } from "react";

// component
import { AuthInput } from "../components/input/auth";
import { HeadingAuth } from "../components/heading/auth";
import { BottomHeading } from "../components/heading/bottom";
import { ButtonAuth } from "../components/button/auth";

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
  setMessage: Dispatch<
    SetStateAction<
      {
        id: string;
        message: string;
        type: string;
      }[]
    >
  >;
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
  setMessage,
}) => {
  const messageLength: boolean = message.length >= 1;

  const closeHandel = (id: string) => {
    console.log("close id is ", id);
  };
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

        {messageLength && (
          <PopUpMainSection>
            {message?.map((pop: IPopMessage) => {
              return (
                <PopUpMessageCard
                  key={pop.id}
                  props={pop}
                  onClose={closeHandel}
                />
              );
            })}
          </PopUpMainSection>
        )}
      </AuthSection>
    </>
  );
};

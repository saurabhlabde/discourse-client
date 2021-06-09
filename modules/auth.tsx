import { FC } from "react";

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

export interface IInput {
  name: string;
  placeholder: string;
  value: string;
}

interface IAuthPage {
  props: Array<IInput>;
  onValueChange: (e: any) => void;
  heading: string;
  bottomText: string;
  bottomRedirectLink: string;
  buttonName: string;
  onSubmit: (e: any) => void;
}

export const AuthPage: FC<IAuthPage> = ({
  heading,
  props,
  onValueChange,
  bottomText,
  bottomRedirectLink,
  onSubmit,
  buttonName,
}) => {
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
      </AuthSection>
    </>
  );
};

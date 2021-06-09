import { FC } from "react";

// style
import {
  HeadingSection,
  HeadingText,
} from "../../styles/components/heading/auth";

interface IHeadingAuth {
  heading: string;
}

export const HeadingAuth: FC<IHeadingAuth> = ({ heading }) => {
  return (
    <>
      <HeadingSection>
        <HeadingText>{heading ? heading : ""}</HeadingText>
      </HeadingSection>
    </>
  );
};

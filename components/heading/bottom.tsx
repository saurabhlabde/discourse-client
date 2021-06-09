import { FC } from "react";
import Link from "next/link";

// style
import {
  BottomSection,
  BottomHeadingText,
} from "../../styles/components/heading/bottom";

interface IBottom {
  text: string;
  rLink: string;
}

export const BottomHeading: FC<IBottom> = ({ text, rLink }) => {
  return (
    <>
      <Link href={rLink ? rLink : ""}>
        <BottomSection>
          <BottomHeadingText>{text ? text : ""}</BottomHeadingText>
        </BottomSection>
      </Link>
    </>
  );
};

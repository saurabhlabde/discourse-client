import { FC } from "react";

// style
import { ButtonSection, Button } from "../../styles/components/button/auth";

interface IButtonAuth {
  buttonName: string;
}
export const ButtonAuth: FC<IButtonAuth> = ({ buttonName }) => {
  return (
    <>
      <ButtonSection>
        <Button>{buttonName ? buttonName : "Click"}</Button>
      </ButtonSection>
    </>
  );
};

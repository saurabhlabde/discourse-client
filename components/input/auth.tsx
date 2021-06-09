import { FC } from "react";

// style
import { InputSection, Input } from "../../styles/components/input/auth";

// type
import { IInput } from "../../modules/auth";

interface IAuthInput {
  props: IInput;
  onChange: (e: any) => void;
}

export const AuthInput: FC<IAuthInput> = ({ props, onChange }) => {
  return (
    <>
      <InputSection>
        <Input
          placeholder={props.placeholder}
          value={props.value}
          name={props.name}
          onChange={onChange ? onChange : undefined}
        />
      </InputSection>
    </>
  );
};

import { FC } from "react";

// style
import {
  SearchSection,
  SearchForm,
  SearchInput,
} from "../../styles/components/search";

interface ISearchCard {
  name: string;
  value: string;
  onChange: (e: any) => void;
  onSubmit: (e: any) => void;
}

export const SearchCard: FC<ISearchCard> = ({
  name,
  value,
  onChange,
  onSubmit,
}) => {
  const placeHolder: string = "Find family and friends";

  return (
    <>
      <SearchSection>
        <SearchForm onSubmit={onSubmit ? onSubmit : undefined}>
          <SearchInput
            placeholder={placeHolder}
            name={name}
            value={value}
            onChange={onChange ? onChange : undefined}
          />
        </SearchForm>
      </SearchSection>
    </>
  );
};

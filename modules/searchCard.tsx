import { useState } from "react";
import { SearchCard } from "../components/input/search";

export const SearchBox = () => {
  const [value, setValue] = useState("");

  const onValueChange = (e: any) => {
    setValue(e.target.value);
  };

  const searchHandel = (e: any) => {
    e?.preventDefault();
    console.log("search....");
  };

  return (
    <SearchCard
      name="value"
      value={value}
      onChange={onValueChange}
      onSubmit={searchHandel}
    />
  );
};

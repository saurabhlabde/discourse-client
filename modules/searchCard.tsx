import { useRouter } from "next/router";
import { useState } from "react";
import { SearchCard } from "../components/input/search";

export const SearchBox = () => {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const onValueChange = (e: any) => {
    setQuery(e.target.value);
  };

  const searchHandel = (e: any) => {
    e?.preventDefault();
    router.push(`/search?q=${query}`);
  };

  return (
    <SearchCard
      name="query"
      value={query}
      onChange={onValueChange}
      onSubmit={searchHandel}
    />
  );
};

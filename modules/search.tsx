import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { BackButton } from "../components/button/back";
import { IUser, SearchCard } from "../components/card/search";
import { RECOMMENDATION } from "../gql/recommendation";
import { SEARCH } from "../gql/search";
import { SearchSection } from "../styles/components/input/search";
import {
  ChatsUserSection,
  MessageHeading,
  MessageHeadingSection,
  NotAnyMessageSection,
  NotMessage,
  UserCardSection,
} from "../styles/modules/chatUser";
import { SearchMSection } from "../styles/modules/search";
import { SearchBox } from "./searchCard";

export const SearchPage = ({ router }) => {
  const [searchData, setSearchData] = useState([]);
  const [recommendationData, setRecommendationData] = useState([]);

  const query: string = router?.query?.q;

  const { data, loading, error } = useQuery(SEARCH, {
    variables: {
      query,
    },
  });

  const {
    data: rData,
    loading: rLoading,
    error: rError,
  } = useQuery(RECOMMENDATION, {
    variables: {
      query,
    },
  });

  useEffect(() => {
    if (data?.search) {
      setSearchData(data?.search);
    }
  }, [data?.search]);

  useEffect(() => {
    if (rData?.recommendation) {
      setRecommendationData(rData?.recommendation);
    }
  }, [rData?.recommendation]);

  return (
    <>
      <ChatsUserSection className="s_cus">
        <SearchMSection className="s_ss">
          <BackButton />
          <SearchSection className="search_section">
            <SearchBox />
          </SearchSection>
        </SearchMSection>
        <UserCardSection className="s_ucs">
          {searchData?.length >= 1 ? (
            <>
              <MessageHeadingSection>
                <MessageHeading>Result</MessageHeading>
              </MessageHeadingSection>
              {searchData?.map((user: IUser) => {
                return <SearchCard key={user.id} props={user} />;
              })}
            </>
          ) : (
            <>
              <NotAnyMessageSection>
                <NotMessage>Not found user {query}</NotMessage>
              </NotAnyMessageSection>
            </>
          )}
        </UserCardSection>
        <UserCardSection className="s_ucs">
          {recommendationData?.length >= 1 && (
            <>
              <MessageHeadingSection>
                <MessageHeading>Recommendation</MessageHeading>
              </MessageHeadingSection>
              {recommendationData?.map((user: IUser) => {
                return <SearchCard key={user.id} props={user} />;
              })}
            </>
          )}
        </UserCardSection>
      </ChatsUserSection>
    </>
  );
};

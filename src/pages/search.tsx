import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "~/components/Layout";
import SearchResultsCourse from "~/components/Search/SearchResultsCourse";
import SearchBar from "~/components/Search/SearchBar";
import FilterSection from "~/components/Search/FilterSection";
import SearchResultsUser from "~/components/Search/SearchResultsUser";

const Search: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [numResult, setNumResult] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("courses");

  let resultsComponent;
  if (selectedFilter === "courses") {
    resultsComponent = <SearchResultsCourse query={searchQuery} />;
  } else {
    resultsComponent = <SearchResultsUser query={searchQuery} />;
  }

  return (
    <Layout>
      <div className="flex h-screen justify-between bg-secondary">
        <div className="ml-10 mr-10 h-full w-[1000px] bg-background pl-[40px] pr-[40px] pt-10">
          <div>
            <SearchBar
              onSubmit={(res) => {
                setSearchQuery(res);
              }}
            />
            {/* Results thing beneath the search bar.. How to implement */}
            <div className="flex justify-between pb-5 pt-5 ">
              <p>Results for &apos;{searchQuery}&apos;</p>
              <p>{numResult} Results</p>
            </div>
          </div>
          {resultsComponent}
        </div>
        <FilterSection
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
      </div>
    </Layout>
  );
};

export default Search;

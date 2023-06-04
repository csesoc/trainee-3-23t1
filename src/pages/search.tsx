import { type NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "~/components/Layout";
import SearchResultsCourse from "~/components/Search/SearchResultsCourse";
import SearchBar from "~/components/Search/SearchBar";
import FilterSection from "~/components/Search/FilterSection";
import SearchResultsUser from "~/components/Search/SearchResultsUser";
import { useSession } from "next-auth/react";

const Search: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [numResult, setNumResult] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("courses");

  const { push } = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/");
    }
  }, [status]);

  return (
    <Layout>
      <div className="flex h-screen justify-between bg-secondary">
        <div className="ml-10 mr-10 h-full w-full bg-background pl-[40px] pr-[40px] pt-10">
          <div>
            <SearchBar
              onSubmit={(res) => {
                setSearchQuery(res);
              }}
            />
          </div>
          {selectedFilter === "courses" ? (
            <SearchResultsCourse query={searchQuery} />
          ) : (
            <SearchResultsUser query={searchQuery} />
          )}
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
